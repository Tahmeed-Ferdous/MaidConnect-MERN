import React from "react";
import useAuth from "../../hooks/useAuth";

const StaffAbout = ({ staff }) => {
  const { slots } = useAuth();
  const { services } = useAuth();

  // Ensure that staff.services is an array and filter out undefined values
  const matchedServices = Array.isArray(staff.services)
    ? staff.services.map(name =>
        services.find(service => service.name === name)
      )
    : [];

  // Ensure matchedServices is an array with no undefined values
  const filteredMatchedServices = matchedServices.filter(service => service);

  // Extract categories correctly
  const staffCategories = filteredMatchedServices.map(service => service?.category || "No Category");
  const categories = [...new Set(staffCategories)];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="text-xl font-semibold text-black">Availability</h3>
          <div className="space-y-2">
            {Array.isArray(slots) && slots.length > 0 ? (
              slots.map((s) => (
                <div key={s._id} className="flex justify-between border-b pb-1">
                  <span className="text-gray-700 font-medium">{s.label}</span>
                  <span className="text-gray-500">
                    {s.start_time} - {s.end_time}
                  </span>
                </div>
              ))
            ) : (
              <p>No availability data available.</p>
            )}
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-black">Location</h4>
            <p className="text-gray-700">{staff.location}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mt-4">Experience</h4>
            <p className="text-gray-700">{staff.experience}</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bg-white p-6 rounded-lg shadow space-y-6">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-black">Bio</h3>
            <p className="text-gray-700 mt-2">{staff.bio}</p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-black">Category</h4>
            {categories.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-2">
                {categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No category found</p>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-2">Services Provided</h4>
            <div className="space-y-4">
              {filteredMatchedServices.length > 0 ? (
                filteredMatchedServices.map((service) => (
                  <div
                    key={service._id}
                    className="flex items-start gap-4 bg-gray-100 p-4 rounded-lg shadow-sm"
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-16 h-16 rounded object-cover border"
                    />
                    <div>
                      <h5 className="font-semibold text-gray-800">{service.name}</h5>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No services available for this staff member.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAbout;
