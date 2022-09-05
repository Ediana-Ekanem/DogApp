import React from "react";
import "../CSS/styles.css";

const Card = ({ price, year, life, color }) => {
  return (
    <div>
      <div class="card bg-light price-card mt-5">
        <div class="card-body">
          <h2 className="dog-price text-info">${price}</h2>
          <h6 className="year text-secondary">{year}</h6>
          <h6 className="life text-secondary">{life}</h6>
          <h6 className="color text-secondary">{color}</h6>
        </div>
        <button
          type="button"
          className=" text-white btn btn-info my-price-btn move-card rounded-pill media-btn"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Card;
