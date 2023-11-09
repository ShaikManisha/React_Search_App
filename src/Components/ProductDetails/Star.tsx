// StarRating.tsx
import React from "react";
import "./Star.scss";

const StarRating = () => {
  return (
    <>
      <div className="star-rating">
        <input type="checkbox" />
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
      </div>
      <div className="star-rating">
        <input type="checkbox" />
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star"></p>
      </div>
      <div className="star-rating">
        <input type="checkbox" />
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star"></p>
        <p className="fa fa-star"></p>
      </div>
      <div className="star-rating">
        <input type="checkbox" />
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star "></p>
        <p className="fa fa-star"></p>
        <p className="fa fa-star"></p>
      </div>
      <div className="star-rating">
        <input type="checkbox" />
        <p className="fa fa-star checked"></p>
        <p className="fa fa-star "></p>
        <p className="fa fa-star "></p>
        <p className="fa fa-star"></p>
        <p className="fa fa-star"></p>
      </div>
    </>
  );
};

export default StarRating;
