import React from "react";
import useAuth from "../hooks/useAuth";
import { Outlet, Navigate, useLocation } from 'react-router-dom';

const PrivateOutlet = () => {
    const { user } = useAuth();
    const location = useLocation();

    // Check if the user exists and is authenticated
    return user ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateOutlet;
