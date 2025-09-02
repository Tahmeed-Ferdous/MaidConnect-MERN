import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/homepage/Home';
import Staff from './pages/staffpage/staff';
import Service from './pages/servicepage/services';
import Login from './pages/loginpage/login';
import ServiceDetails from './components/services/servicedetails';
import StaffDetails from './components/staffs/staffdetails';
import Signup from './pages/signuppage/signup';
import AuthProvider from './context/authProvider';
import PrivateOutlet from './components/PrivateOutlet';
import Dashboard from './pages/dashboard/dashboard';
import StaffDashboard from './pages/Staff/StaffDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';



function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff-details/:id" element={<StaffDetails />} />
        <Route path="/services" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service-details/:id" element={<ServiceDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateOutlet />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/staffdashboard" element={<StaffDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
