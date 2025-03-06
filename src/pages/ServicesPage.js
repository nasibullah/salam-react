import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:4000/data");
        const data = await response.json();
        console.log(data);
        setServices(data?.services || []);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchServices();
  }, []);
  return (
    <div>
      <h2 className="our-services">Our Services</h2>
      <div className="service-container">
        {services.length === 0 ? (
          <p>Loading services...</p>
        ) : (
          services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-title-container">
                <h3 className="service-name">{service.name}</h3>
              </div>
              <p className="service-des">{service.description}</p>
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default ServicesPage;
