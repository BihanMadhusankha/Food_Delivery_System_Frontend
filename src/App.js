import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/Registration';
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage'; // Optional, for handling 404 routes

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<HomePage />} /> {/* Optional route for 404 pages */}
            </Routes>
        </Router>
    );
};

export default App;
