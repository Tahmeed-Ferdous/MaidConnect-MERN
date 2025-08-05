import { Routes, Route } from 'react-router-dom';
import Home from './pages/homepage/Home';
import Staff from './pages/staffpage/staff';
import Service from './pages/servicepage/services';
import Login from './pages/loginpage/login';
import ServiceDetails from './components/services/servicedetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/services" element={<Service />} />
      <Route path="/login" element={<Login />} />
      <Route path="/service-details/:id" element={<ServiceDetails />} />
    </Routes>
  );
}

export default App;
