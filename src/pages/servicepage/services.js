import React from "react";
import Navbar from "../../components/Navbar";
import ServicesCard from "../../components/services/servicescard";
import useAuth from "../../hooks/useAuth";

const Service = () => {

  const { user, categories, services } = useAuth()


  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h3>Hi {user.name}</h3>
        <h1 className="text-3xl font-bold text-red-900 mb-8">All Services</h1>


        {categories.map((category) => (
          <div key={category._id} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.filter((service) => service.category === category.name).map((service) => (
                <ServicesCard key={service._id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

