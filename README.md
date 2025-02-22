# Finance Manager App

This project is a Finance Manager application built using Node.js, React, Bootstrap, and MongoDB. It allows users to track their expenses and credits, providing an interactive dashboard with tables and charts for financial insights.

## Tech Stack

- **Frontend:** React, Bootstrap  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- MongoDB

### Clone the Repository

```sh
git clone https://github.com/your-username/finance-manager.git
cd finance-manager
```

## Backend Setup

Navigate to the backend folder:

```sh
cd backend
```

Install dependencies:

```sh
npm install
```

Create a `.env` file for environment variables:

```sh
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:

```sh
npm start
```

The backend will run on [http://localhost:5000](http://localhost:5000).

## Frontend Setup

Navigate to the frontend folder:

```sh
cd frontend
```

Install dependencies:

```sh
npm install
```

Start the frontend application:

```sh
npm start
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

### Backend Scripts

- `npm start` – Runs the backend server.
- `npm run dev` – Runs the backend with nodemon for auto-reloading.

### Frontend Scripts

- `npm start` – Starts the React development server.
- `npm run build` – Builds the app for production.

## Project Features

### Authentication

✅ User signup with validation rules:
- At least 8 characters long
- Contains 1 special character (@, #, $, etc.)
- Contains 1 uppercase letter
- Contains 1 number
✅ User login with email & password verification.
✅ Error messages for incorrect credentials.

### Dashboard Features

✅ **New Transaction Entry:**
- Add credit or expense with description, amount, and date.

✅ **Transaction Table:**
- Displays all recorded transactions.
- Allows sorting and filtering.

✅ **Data Visualization:**
- A chart showing income vs. expenses.
- Hover effects & interactive UI.

### UI/UX Enhancements

✅ Bootstrap styling for a professional look.  
✅ Dark mode toggle using JavaScript.  
✅ Responsive design for mobile & desktop.  

## Deployment

### Frontend Deployment

```sh
npm run build
```

Then, deploy the `build` folder to Netlify, Vercel, or any hosting provider.

### Backend Deployment

Use Heroku, Render, or VPS (DigitalOcean, AWS, etc.).

```sh
git push heroku main
```

Ensure the MongoDB URI is correctly set in environment variables.

## Contributing

1. **Fork** the repository  
2. **Create a new branch** (`feature/your-feature`)  
3. **Commit your changes** (`git commit -m 'Add new feature'`)  
4. **Push to the branch** (`git push origin feature/your-feature`)  
5. **Open a Pull Request**  

---

**Happy Coding! 🚀**

