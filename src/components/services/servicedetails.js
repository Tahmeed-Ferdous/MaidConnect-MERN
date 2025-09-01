import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import StaffMiniCard from "../staffs/staffminicard";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";

const ServiceDetails = () => {
  const { id } = useParams();
  const { staffs, service, setService } = useAuth();

  useEffect(() => {
    if (!service.name) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:5000/service/${id}`);
          const result = await response.json();
          if (result.status) {
            setService(result.service);
          }
          else {
            console.log(result);
          }
        }
        catch (error) {
          fetchData();
        }
      }
      fetchData();
    }
  }, [service.name, id, setService]);

  if (!service) {
    return <div className="text-center text-red-500 mt-10">Service not found.</div>;
  }

  // Ensure staff.services is always an array
  const matchedStaffs = staffs.filter((staff) =>
    Array.isArray(staff.services) && staff.services.includes(service.name)
  );

  return (
    <div className="px-4">
      <Navbar />
      <h1 className="text-2xl font-bold text-center my-6">{service.name}</h1>
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-64 object-cover mb-4"
      />
      <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded">
        <p className="text-gray-700 mb-4">{service.description}</p>
        <h2 className="text-xl font-semibold mb-2">
          Category: {service.category}
        </h2>
      </div>

      {/* Staff Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Available Staffs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchedStaffs.length > 0 ? (
            matchedStaffs.map((staff) => (
              <StaffMiniCard key={staff._id} staff={staff} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No staff available for this service.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
