// Dashboard.js
import React, { useState } from 'react';
import { Container, Form, Button, Table } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css'; // Importing CSS for styling

import { Chart, registerables } from 'chart.js'; // Import Chart.js and registerables

const Dashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [sortBy, setSortBy] = useState('date'); // New state for sorting
    const [filterType, setFilterType] = useState('All'); // New state for filtering
    const [entry, setEntry] = useState({ date: '', description: '', amount: '', type: 'Credit' });

    const handleChange = (e) => {
        setEntry({ ...entry, [e.target.name]: e.target.value });
    };

    const handleSort = () => {
        const sortedTransactions = [...transactions].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortBy === 'date' ? dateA - dateB : b.amount - a.amount;
        });
        setTransactions(sortedTransactions);
    };

    const handleFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredTransactions = transactions.filter(trans => 
        filterType === 'All' || trans.type === filterType
    ).sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'amount') {
            return b.amount - a.amount;
        }
        return 0;
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setTransactions([...transactions, entry]);
        setEntry({ date: '', description: '', amount: '', type: 'Credit' });
        handleSort(); // Sort after adding a new transaction
    };

    const income = transactions.filter(trans => trans.type === 'Credit').reduce((acc, trans) => acc + parseFloat(trans.amount), 0);
    const expenses = transactions.filter(trans => trans.type === 'Expense').reduce((acc, trans) => acc + parseFloat(trans.amount), 0);

    Chart.register(...registerables); // Register the necessary components
    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [
            {
                label: 'Amount',
                data: [income, expenses],
                backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container className="dashboard-container">
            <h2 className="dashboard-title" style={{ fontSize: '1.5rem', textAlign: 'center' }}>Finance Manager App</h2> {/* Updated header text and centered */}

            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" placeholder="Description" value={entry.description} onChange={handleChange} required />
                    </Form.Group>
                    <div className="row-inputs">
                        <Form.Group controlId="formBasicDate" className="col-6">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" value={entry.date} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formBasicAmount" className="col-6">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" name="amount" placeholder="Amount" value={entry.amount} onChange={handleChange} required />
                        </Form.Group>
                    </div>
                    <Form.Group controlId="formBasicType" className="text-center">
                        <Form.Label>Transaction Type</Form.Label>
                        <Form.Control as="select" name="type" value={entry.type} onChange={handleChange}>
                            <option>Credit</option>
                            <option>Expense</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="dashboard-button">Add Transaction</Button>
                </Form>
            </div>

            <div className="controls-container">
                <Form.Group controlId="formBasicSort">
                    <Form.Label>Sort by</Form.Label>
                    <Form.Control as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicFilter">
                    <Form.Label>Filter by Type</Form.Label>
                    <Form.Control as="select" value={filterType} onChange={handleFilterChange}>
                        <option>All</option>
                        <option>Credit</option>
                        <option>Expense</option>
                    </Form.Control>
                </Form.Group>
            </div>

            <Table striped bordered hover className="dashboard-table mt-3">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((trans, index) => (
                        <tr key={index}>
                            <td>{trans.date}</td>
                            <td>{trans.description}</td>
                            <td>{trans.amount}</td>
                            <td>{trans.type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="chart-container">
                <Bar data={data} className="dashboard-chart" />
            </div>

        </Container>
    );
};

export default Dashboard;
