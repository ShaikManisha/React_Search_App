/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import "./Search.scss";
import axios from "axios";
import Logo from "../../images/Logo1.png";
import { FiSearch } from "react-icons/fi";
import Product from "../ProductCard/Product";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isProductVisible, setIsProductVisible] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // Set the products data in the state
        setProducts(response?.data?.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // The empty dependency array ensures that the effect runs once on component mount

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setIsProductVisible(true);
  };

  const filteredProducts = products
    ? products?.filter((product: any) => {
        const searchTerm = inputValue.toLowerCase();
        return product.title.toLowerCase().includes(searchTerm);
      })
    : [];

  return (
    <div className="search-background">
      <div className="title">
        <img src={Logo} width={66} height={33} />
      </div>
      <div className="search-container">
        <div className="input-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
            onClick={handleInputClick}
          />
          <i className="search-icon">
            <FiSearch />
          </i>
        </div>
        {isProductVisible && (
          <div className="card">
            <Product products={filteredProducts} isLoading={isLoading} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
