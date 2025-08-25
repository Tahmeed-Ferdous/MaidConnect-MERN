import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CreateUser from "../../components/Admin/UserModule/CreateUser";
import ViewUsers from "../../components/Admin/UserModule/ViewUsers";
import { ToastContainer } from "react-toastify";
import CreateCategory from "../../components/Admin/CategoryModule/CreateCategory";
import ViewCategory from "../../components/Admin/CategoryModule/ViewCategory";
import CreateSlot from "../../components/Admin/SlotModule/CreateSlot";
import ViewSlot from "../../components/Admin/SlotModule/ViewSlot";
import CreateService from "../../components/Admin/ServiceModule/CreateService";
import ViewService from "../../components/Admin/ServiceModule/ViewService";
import ViewStaff from "../../components/Admin/StaffModule/ViewStuff";
import CreateStaff from "../../components/Admin/StaffModule/CreateStaff";

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        user.role === 'admin' && navigate('/admin');
        user.role === 'staff' && navigate('/staffdashboard');
        user.role === 'user' && navigate('/dashboard');
    }, [user.role, navigate]);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <Navbar />

            <div className="max-w-[1400px] mx-auto p-6 space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-600 mt-1">
                            Welcome back, <span className="font-medium">{user.name}</span>
                        </p>
                    </div>
                    <button
                        onClick={() => logout()}
                        className="px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium shadow-sm"
                    >
                        Logout
                    </button>
                </div>

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Column - User Management (50% width) */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                            User Management
                        </h2>

                        {/* Create User Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Create User</h3>
                                </div>
                                <CreateUser />
                            </div>
                        </div>

                        {/* View Users Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Manage Users</h3>
                                </div>
                                <ViewUsers />
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Service Management
                            </h2>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Create Service</h3>
                                </div>
                                <CreateService />
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                                        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Manage Services</h3>
                                </div>
                                <ViewService />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Category and Slot Management (50% width) */}
                    <div className="space-y-6">
                        {/* Category Management Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Category Management
                            </h2>

                            {/* Create Category Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">Create Category</h3>
                                    </div>
                                    <CreateCategory />
                                </div>
                            </div>

                            {/* View Categories Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">Manage Categories</h3>
                                    </div>
                                    <ViewCategory />
                                </div>
                            </div>
                        </div>

                        {/* Slot Management Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                                Slot Management
                            </h2>

                            {/* Create Slot Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">Create Slot</h3>
                                    </div>
                                    <CreateSlot />
                                </div>
                            </div>

                            {/* View Slots Card */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">Manage Slots</h3>
                                    </div>
                                    <ViewSlot />
                                </div>
                            </div>


                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">Create Staff</h3>
                                    </div>
                                    <CreateStaff />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-medium text-gray-900">Manage Staffs</h3>
                                    </div>
                                    <ViewStaff />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default AdminDashboard;
