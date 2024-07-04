import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchData, selectData, selectStatus } from '../features/data/dataSlice';
import './Laptops.css'; 
const Laptops: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const addToCart = (item: unknown) => {
    console.log('Add to Cart:', item);
  };

  const laptops = data[0]?.laptops || [];

  return (
    <div className="laptops-container">
      <h1>Laptops</h1>
      <h2>Featured Products</h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Failed to load data</div>}
      {status === 'idle' && (
        <div className="products-container">
          {laptops.map((laptop) => (
            <div key={laptop.id} className="product">
              <img src={laptop.img} alt={laptop.model} />
              <h2>{laptop.brand}</h2>
              <p>Model: {laptop.model}</p>
              <p>Price: ${laptop.price}</p>
              <p>Specs: {laptop.specs.join(', ')}</p>
              <button onClick={() => addToCart(laptop)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Laptops;
