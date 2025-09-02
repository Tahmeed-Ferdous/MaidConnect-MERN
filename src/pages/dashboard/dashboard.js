import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PaymentsHistory from "../../components/Dashboard/PaymentsHistory";
import AppointmentsHistory from "../../components/Dashboard/AppointmentsHistory";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.role === 'admin') navigate('/admin');
        if (user.role === 'staff') navigate('/staffdashboard');
        if (user.role === 'user') navigate('/dashboard');
    }, [user.role, navigate]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="container mx-auto p-6">
                {/* Welcome Section */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome, {user.name}!</h1>
                    <p className="text-lg text-gray-600 mb-4">You are logged in as a {user.role}.</p>
                    <button
                        className="bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-gray-800 transition duration-300"
                        onClick={() => logout()}
                    >
                        Logout
                    </button>
                </div>

                {/* Payments History */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payments History</h2>
                    <PaymentsHistory />
                </div>

                {/* Appointments History */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointments History</h2>
                    <AppointmentsHistory />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
