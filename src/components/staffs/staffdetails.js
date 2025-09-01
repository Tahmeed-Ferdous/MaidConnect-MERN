import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import StaffAbout from "../../components/staffs/staffabout";
import StaffRating from "../../components/staffs/staffrating";
import useAuth from "../../hooks/useAuth";

const StaffDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");
  const {staff, setStaff } = useAuth();

  // const staff = staffs.find((s) => s._id === id);
  useEffect(() => {
    if (!staff.name) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/staff/${id}`);
          const result = await response.json();
          if (result.status) {
            setStaff(result.staff);
          }
          else {
            console.log(result);
          }
        } catch (err) {
          fetchData();
        }
      }
      fetchData();
    }
  }, [id, setStaff, staff.name]);

  if (!staff) return <div className="text-center mt-10 text-red-600">Staff not found</div>;

  return (
    <div>
      <Navbar />

      {/* Profile Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          src={staff.image}
          alt={staff.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">{staff.name}</h2>
        <p className="text-gray-600">{staff.role} &middot; {staff.experience}</p>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setActiveTab("about")}
          className={`px-6 py-2 rounded-md font-semibold ${activeTab === "about"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab("ratings")}
          className={`px-6 py-2 rounded-md font-semibold ${activeTab === "ratings"
              ? "bg-black text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
        >
          Ratings
        </button>
      </div>

      {/* Content */}
      <div className="mt-6 max-w-2xl mx-auto px-4">
        {staff.name && activeTab === "about" ? <StaffAbout staff={staff} /> : <StaffRating />}
      </div>
    </div>
  );
};

export default StaffDetails;
