import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot

import App from './App';
import { CssBaseline } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';


const container = document.getElementById('root');
const root = createRoot(container); // Create a root

root.render(

    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
