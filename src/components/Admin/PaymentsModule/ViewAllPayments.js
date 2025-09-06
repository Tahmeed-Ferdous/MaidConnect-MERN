import React from "react";
import useAuth from "../../../hooks/useAuth";

const ViewAllPayments = () => {
  const { bookings, setBookings } = useAuth();
  const bookin = Array.isArray(bookings) ? bookings : [];

  // Refresh bookings list after delete
  const refreshBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/bookings");
      const result = await response.json();
      if (result.status) {
        setBookings(result.bookings);
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Handle delete booking
  const handleDeleteBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (result.status) {
        alert(result.message); // ✅ simple feedback
        await refreshBookings();
      } else {
        alert(result.message || "Failed to delete booking");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong while deleting");
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="my-5 p-2 border rounded-lg shadow-lg bg-white">
      <div className="overflow-y-auto max-h-80">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-black text-white z-10">
            <tr>
              <th className="text-sm font-medium text-left p-4">Trx Id</th>
              <th className="text-sm font-medium text-left p-4">Service</th>
              <th className="text-sm font-medium text-left p-4">Rate</th>
              <th className="text-sm font-medium text-left p-4">Status</th>
              <th className="text-sm font-medium text-right p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookin.length > 0 ? (
              bookin.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="text-sm font-light p-4">{booking.trx_id}</td>
                  <td className="text-sm font-light p-4 font-semibold">
                    {booking.service?.name}
                  </td>
                  <td className="text-sm font-light p-4">
                    {formatCurrency(booking.staff?.rate)}
                  </td>
                  <td
                    className={`text-sm font-light p-4 ${
                      booking.status === "success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="text-sm font-light p-4 text-right">
                    <button
                      onClick={() => handleDeleteBooking(booking._id)}
                      className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No bookings available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllPayments;
