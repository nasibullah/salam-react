import React from "react";
import logo1 from "../../public/logo1.png";

const ResCard = ({ data }) => {
  const { image, title, cuisines, description, stars, rate, id } = data;
  return (
    <div className="card-container2">
      <div className="card">
        <img
          className="food"
          src={"http://localhost:4000/images/" + image}
          alt="Food"
        />
        {/* <img className="food" src={data.image} alt="Food" /> */}
        <h2>{title}</h2>
        <h3 className="h3-cuisines">Cuisines:</h3>
        <h4 className="h4-cuisines">{cuisines}</h4>
        <h4 className="h4">{description}</h4>
        <h4 className="h4-rate">Avg Rate: {rate}</h4>
        <div className="star-visit">
          <h4 className="stars">{stars}</h4>
          <button className="visit-btn">Visit</button>
        </div>
      </div>
    </div>
  );
};

export default ResCard;
