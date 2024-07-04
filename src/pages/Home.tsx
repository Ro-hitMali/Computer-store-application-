import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import {
  fetchData,
  selectData,
  selectStatus,
} from "../features/data/dataSlice";
import { useNavigate } from 'react-router-dom';
import "./Home.css";
// import { Computer, Laptop, Accessory } from '../features/data/types';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const status = useAppSelector(selectStatus);
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    document.title = "Rohit's App";
  }, []);

  const addToCart = (item: unknown) => {
    console.log("Add to Cart:", item);
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for computers, laptops, and accessories.</p>
        <button onClick={() => navigate('/computers')}>Shop Computers</button>
        <button onClick={() => navigate('/laptops')}>Shop Laptops</button>
      </header>
      <hr></hr>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Failed to load data</div>}
      {status === "idle" && data.length > 0 && (
        <div>
          <h2>Computers</h2>
          <h2>Featured Products</h2>
          <div className="featured-products">
            {data[0].computers?.map((computer) => (
              <div key={computer.id} className="product">
                <img src={computer.img} alt={computer.model} />
                <h2>{computer.brand}</h2>
                <p>Model: {computer.model}</p>
                <p>Price: ${computer.price}</p>
                <p>Specs: {computer.specs.join(", ")}</p>
                <button onClick={() => addToCart(computer)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <hr></hr>
          <h2>Laptops</h2>
          <h3>Featured Products</h3>
          <div className="featured-products">
            {data[0].laptops?.map((laptop) => (
              <div key={laptop.id} className="product">
                <img src={laptop.img} alt={laptop.model} />
                <h2>{laptop.brand}</h2>
                <p>Model: {laptop.model}</p>
                <p>Price: ${laptop.price}</p>
                <p>Specs: {laptop.specs.join(", ")}</p>
                <button onClick={() => addToCart(laptop)}>Add to Cart</button>
              </div>
            ))}
          </div>
            <hr></hr>
          <h2>Accessories</h2>
          <h3>Featured Products</h3>
          <div className="featured-products">
            {data[0].accessories?.map((accessory) => (
              <div key={accessory.id} className="product">
                <img src={accessory.img} alt={accessory.model} />
                <h2>{accessory.brand}</h2>
                <p>Type: {accessory.type}</p>
                <p>Model: {accessory.model}</p>
                <p>Price: ${accessory.price}</p>
                <button onClick={() => addToCart(accessory)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          <div className="testimonials">
            <h3>What Our Customers Say</h3>
            <div className="testimonial">
              <p>"Great service and amazing products. Highly recommend!"</p>
              <h4>- John Doe</h4>
            </div>
            <div className="testimonial">
              <p>
                "I love my new laptop. The delivery was quick and the price was
                unbeatable."
              </p>
              <h4>- Jane Smith</h4>
            </div>

            <div className="cta-section">
              <h2>Join Our Newsletter</h2>
              <p>
                Stay updated with the latest products and offers. Sign up now!
              </p>
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
