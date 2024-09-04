import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar'; // Import NavBar
import Footer from './Footer'; // Import Footer

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect to login if not authenticated
        } else {
            // Fetch user data
            axios.get('http://localhost:5001/api/auth/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data', error);
                localStorage.removeItem('token');
                navigate('/login');
            });
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <NavBar /> {/* Include NavBar */}
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Dashboard</h1>
                    {user ? (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Welcome, {user.name}!</h2>
                            <p className="mb-4">Email: {user.email}</p>
                            <button
                                onClick={handleLogout}
                                className="w-full bg-red-500 text-white p-3 rounded-lg font-bold hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <Footer /> {/* Include Footer */}
        </>
    );
};

export default Dashboard;
