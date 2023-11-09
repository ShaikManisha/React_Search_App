/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";

const Product = ({ products, isLoading }: any) => {
  return (
    <div className="container">
      <h4 className="header">Latest Trends</h4>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="card-list">
          {products?.map((item: any, index: any) => (
            <div className="card-content" key={index}>
              <Link to={`/product/${item?.id}`} className="link">
                <img className="card-image" src={item?.image} alt="Fashion" />
                <span className="card-title">{item?.title}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div className="popular">
        <h4>Popular Suggestions</h4>
        <div className="popular-content">
          <span>Striped shirt dress</span>
          <span>Stain shits</span>
          <span>Denim jumpsuit</span>
          <span>Leather dresses</span>
          <span>Solid shirts</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
