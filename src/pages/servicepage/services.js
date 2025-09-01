import React from "react";
import Navbar from "../../components/Navbar";
import ServicesCard from "../../components/services/servicescard";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";

const Service = () => {
  const { user, services } = useAuth();
  const location = useLocation();
  
  // Parse the search query from the URL
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || "";  // Default to empty string if no search

  // Filter services based on the search query
  const filteredServices = services.filter((service) => 
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h3>Hi {user.name}</h3>
        <h1 className="text-3xl font-bold text-red-900 mb-8">Services</h1>

        {/* If there are matching services, show them, else show no result message */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServicesCard key={service._id} service={service} />
            ))}
          </div>
        ) : (
          <p>No services found for "{searchQuery}".</p>
        )}
      </div>
    </div>
  );
};

export default Service;
