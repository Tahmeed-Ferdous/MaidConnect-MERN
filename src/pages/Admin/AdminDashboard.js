import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreateUser from "../../components/Admin/UserModule/CreateUser";
import ViewUsers from "../../components/Admin/UserModule/ViewUsers";
import CreateCategory from "../../components/Admin/CategoryModule/CreateCategory";
import ViewCategory from "../../components/Admin/CategoryModule/ViewCategory";
import CreateService from "../../components/Admin/ServiceModule/CreateService";
import ViewService from "../../components/Admin/ServiceModule/ViewService";
import CreateSlot from "../../components/Admin/SlotModule/CreateSlot";
import ViewSlot from "../../components/Admin/SlotModule/ViewSlot";
import CreateStaff from "../../components/Admin/StaffModule/CreateStaff";
import ViewStaff from "../../components/Admin/StaffModule/ViewStuff";

// ⬇️ New imports
import ViewAllPayments from "../../components/Admin/PaymentsModule/ViewAllPayments";
import ViewAllAppointments from "../../components/Admin/AppointmentsModule/ViewAllAppointments";

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    user.role === "admin" && navigate("/admin");
    user.role === "staff" && navigate("/staffdashboard");
    user.role === "user" && navigate("/dashboard");
  }, [user.role, navigate]);

  // Tab state
  const [activeTab, setActiveTab] = useState("user"); // Default tab

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

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-6">
          <button
            className={`text-lg font-medium ${activeTab === "user" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("user")}
          >
            Users
          </button>
          <button
            className={`text-lg font-medium ${activeTab === "category" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("category")}
          >
            Categories
          </button>
          <button
            className={`text-lg font-medium ${activeTab === "service" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("service")}
          >
            Services
          </button>
          <button
            className={`text-lg font-medium ${activeTab === "slot" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("slot")}
          >
            Slots
          </button>
          <button
            className={`text-lg font-medium ${activeTab === "staff" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("staff")}
          >
            Staff
          </button>

          <button
            className={`text-lg font-medium ${activeTab === "payappt" ? "text-black border-b-2 border-black" : "text-gray-500"}`}
            onClick={() => setActiveTab("payappt")}
          >
            Payments
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "user" && (
            <>
              <div className="flex space-x-8">
                {/* Create User Form */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Create User</h3>
                    <CreateUser />
                  </div>
                </div>

                {/* View Users */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Manage Users</h3>
                    <ViewUsers />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "category" && (
            <>
              <div className="flex space-x-8">
                {/* Create Category Form */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Create Category</h3>
                    <CreateCategory />
                  </div>
                </div>

                {/* View Categories */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Manage Categories</h3>
                    <ViewCategory />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "service" && (
            <>
              <div className="flex space-x-8">
                {/* Create Service Form */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Create Service</h3>
                    <CreateService />
                  </div>
                </div>

                {/* View Services */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Manage Services</h3>
                    <ViewService />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "slot" && (
            <>
              <div className="flex space-x-8">
                {/* Create Slot Form */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Create Slot</h3>
                    <CreateSlot />
                  </div>
                </div>

                {/* View Slots */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Manage Slots</h3>
                    <ViewSlot />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === "staff" && (
            <>
              <div className="flex space-x-8">
                {/* Create Staff Form */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Create Staff</h3>
                    <CreateStaff />
                  </div>
                </div>

                {/* View Staff */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Manage Staff</h3>
                    <ViewStaff />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ⬇️ New Tab Content */}
          {activeTab === "payappt" && (
            <>
              <div className="flex space-x-8">
                {/* View All Payments */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">All Payments</h3>
                    <ViewAllPayments />
                  </div>
                </div>

                {/* View All Appointments */}
                <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">All Appointments</h3>
                    <ViewAllAppointments />
                  </div>
                </div>
              </div>
            </>
          )}
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
