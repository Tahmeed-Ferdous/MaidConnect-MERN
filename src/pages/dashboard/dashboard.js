import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PaymentsHistory from "../../components/Dashboard/PaymentsHistory";
import AppointmentsHistory from "../../components/Dashboard/AppointmentsHistory";
// import AppointmentsHistory from "../../components/Dashboard/AppointmentsHistory";

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user.role === 'admin') navigate('/admin');
        if (user.role === 'staff') navigate('/staffdashboard');
        if (user.role === 'user') navigate('/dashboard');
    }, [user.role, navigate]);

    return (
        <div>
            <Navbar />

            <div className="">
                <div className="">
                    <h1 className="text-3xl font-semibold text-black mb-4">Welcome, {user.name}!</h1>
                    <p className="text-gray-700 mb-6">You are logged in as a {user.role}.</p>
                    <button
                        className="bg-black text-white py-2 px-6 rounded-full text-lg hover:bg-gray-800 transition duration-300"
                        onClick={() => logout()}
                    >
                        Logout
                    </button>
                </div>
                <div>
                <h2>Payments History</h2>
                <PaymentsHistory />
            </div>
            </div>
            
            <div>
                <h2>Appointments History</h2>
                <AppointmentsHistory />
            </div>
        </div>
    );
};

export default Dashboard;
