import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const StaffDashboard = () => {
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
        Staff Dashboard - welcome {user.name}
        <button onClick={()=> logout()}>Logout</button>
        </div>
    );
};

export default StaffDashboard;