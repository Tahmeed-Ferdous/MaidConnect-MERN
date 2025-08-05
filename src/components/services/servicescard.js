import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
  return (
    <Link to={`/service-details/${service._id}`} className="">
      <img src={service.image} alt={service.name} className="w-60 rounded shadow mx-auto" />
      <h3 className="text-center text-xl font-bold mt-4">{service.name}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
    </Link>
  );
};

export default ServicesCard;