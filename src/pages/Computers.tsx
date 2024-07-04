
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { fetchData, selectData, selectStatus } from '../features/data/dataSlice';
import './Computers.css';

const Computers: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const addToCart = (item: unknown) => {
    console.log('Add to Cart:', item);
  };

  const computers = data[0]?.computers || [];

  return (
    <div className="computers-container">
      <h1>Computers</h1>
      <h2>Featured Products</h2>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Failed to load data</div>}
      {status === 'idle' && (
        <div className="products-container">
          {computers.map((computer) => (
            <div key={computer.id} className="product">
              <img src={computer.img} alt={computer.model} />
              <h2>{computer.brand}</h2>
              <p>Model: {computer.model}</p>
              <p>Price: ${computer.price}</p>
              <p>Specs: {computer.specs.join(', ')}</p>
              <button onClick={() => addToCart(computer)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Computers;
