import React from 'react';
import useAuth from '../../hooks/useAuth';

const PaymentsHistory = () => {
  const { bookingsByEmail } = useAuth(); // Destructure bookingsByEmail properly
  const bookings = Array.isArray(bookingsByEmail) ? bookingsByEmail : [];

  // Function to format rate as a dollar amount
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="my-5 p-2 border rounded-lg shadow-lg bg-white">
      <div className="overflow-y-auto max-h-80">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-black text-white z-10">
            <tr>
              <th className="text-sm font-medium text-left p-4">Date</th>
              <th className="text-sm font-medium text-left p-4">Trx Id</th>
              <th className="text-sm font-medium text-left p-4">Service</th>
              <th className="text-sm font-medium text-left p-4">Rate</th>
              <th className="text-sm font-medium text-left p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((booking) => (
                <tr key={booking._id} className="border-b hover:bg-gray-100">
                  <td className="text-sm font-light p-4">{booking.date}</td>
                  <td className="text-sm font-light p-4">{booking.trx_id}</td>
                  <td className="text-sm font-light p-4 font-semibold">{booking.service.name}</td>
                  <td className="text-sm font-light p-4">{formatCurrency(booking.staff.rate)}</td>
                  <td className={`text-sm font-light p-4 ${booking.status === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {booking.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">No bookings available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentsHistory;
