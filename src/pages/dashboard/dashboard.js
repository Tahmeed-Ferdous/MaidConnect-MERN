import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const {user, logout} = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        user.role === 'admin' && navigate('/admin');
        user.role === 'staff' && navigate('/staffdashboard');
        user.role === 'user' && navigate('/dashboard');
    }, [user.role, navigate]);

    return (
        
        <div>
        <Navbar />
        Dashboard - welcome {user.name}
        <button onClick={()=> logout()}>Logout</button>
        </div>
    )
};

export default Dashboard;