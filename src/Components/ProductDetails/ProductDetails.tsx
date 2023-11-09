/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./prodcutDetails.scss";
import Logo from "../../images/Logo1.png";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown, BiHeart } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import StarRating from "./Star";
import axios from "axios";

const ProductDetail = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // Set the products data in the state
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleWishlist = (productId: number) => {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [productId]: !prevWishlist[productId],
    }));
  };

  const handleProductHover = (productId: string) => {
    setHoveredProduct(productId);
  };

  const handleProductLeave = () => {
    setHoveredProduct(null);
  };

  // const handleProductClick = (productId: string) => {
  //   const product = products.find((item: any) => item.id === productId);
  //   // Update the selectedProduct state
  //   setSelectedProduct(product);
  // };

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="details">
      <div className="title-details">
        <img src={Logo} width={66} height={33} />
      </div>
      <div className="search-field">
        <div className="input">
          <input
            type="text"
            className="search"
            placeholder="Search..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <i className="search-icon">
            <FiSearch />
          </i>
        </div>
      </div>
      <h2>Search Results</h2>

      <div className="results-container">
        <div className="side-headings">
          <div className="brand">
            <div className="brand-icon">
              <span>BRAND</span>
              <BiChevronDown />
            </div>
            <div className="check-box">
              <label>
                <input type="checkbox" className="input-field" />
                Mango
              </label>
              <label>
                <input type="checkbox" className="input-field" />
                H&M
              </label>
            </div>
          </div>
          <div className="divide" />
          <div className="brand">
            <div className="brand-icon">
              <span className="price">PRICE RANGE</span>
              <BiChevronDown />
            </div>
            <div className="check-box">
              <label>
                <input type="checkbox" className="input-field" />
                Under 500
              </label>
              <label>
                <input type="checkbox" className="input-field" />
                1000 To 3000
              </label>
            </div>
          </div>
          <div className="divide" />
          <div className="brand">
            <div className="brand-icon">
              <span>RATING</span>
              <BiChevronDown />
            </div>
            <div className="check-box">
              <StarRating />
            </div>
          </div>
        </div>
        <div className="images-list">
          {" "}
          {isLoading ? (
            <div className="loader">Loading...</div>
          ) : (
            <div className="card-list">
              {filteredProducts?.map((item: any, index: any) => (
                <div
                  className="card-content"
                  key={index}
                  onMouseEnter={() => handleProductHover(item.id)}
                  onMouseLeave={handleProductLeave}
                  // onClick={() => handleProductClick(item.id)}
                >
                  <Link to={`/product/${item.id}`} className="link">
                    <img
                      className="card-image"
                      src={item.image}
                      alt="Fashion"
                    />
                    {hoveredProduct === item.id && (
                      <button className="view-product-button">
                        View Product
                      </button>
                    )}
                    {wishlist[item.id] ? (
                      <AiFillHeart
                        className="heart-icon filled"
                        onClick={() => toggleWishlist(item.id)}
                      />
                    ) : (
                      <BiHeart
                        className="heart-icon"
                        onClick={() => toggleWishlist(item.id)}
                      />
                    )}
                  </Link>
                  <div className="rankings">
                    <span className="card-title">
                      {" "}
                      {item.title.length > 20
                        ? `${item.title.slice(0, 20)}...`
                        : item.title}
                    </span>
                    <p>
                      <del style={{ color: "gray" }}>Rs.599</del>
                      <span
                        style={{
                          paddingLeft: "6px",
                          color: "#7b8ceb",
                          fontWeight: 500,
                        }}>
                        Rs.570
                      </span>
                    </p>

                    <p className="rating">
                      {" "}
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span style={{ fontSize: "12px" }}>(210)</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
