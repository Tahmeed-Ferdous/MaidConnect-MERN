import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Staff from './pages/staffpage/staff';
import Service from './pages/servicepage/services';
import Login from './pages/loginpage/login';
import ServiceDetails from './components/services/servicedetails';
import StaffDetails from './components/staffs/staffdetails';
import Signup from './pages/signuppage/signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/staff-details/:id" element={<StaffDetails />} />
      <Route path="/services" element={<Service />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service-details/:id" element={<ServiceDetails />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
