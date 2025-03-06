import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ResDetails = () => {
  const { id } = useParams();
  const [resDetails, setResDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResDetails();
  }, [id]);

  const fetchResDetails = async () => {
    try {
      console.log("Fetching restaurant with ID:", id);
      const response = await fetch(`http://localhost:4000/resData/${id}`);

      const data = await response.json();
      console.log("Received data:", data);
      setResDetails(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!resDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>This is Restaurant details section...</h2>

      <div>
        <h3>{resDetails.title}</h3>
        <h3>Menu:</h3>
        <ul>
          {resDetails.menu?.map((menu, index) => (
            <li key={index}>
              {menu.name} - {menu.price} AFN
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ResDetails;
