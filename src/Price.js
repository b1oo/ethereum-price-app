import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Price = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
      );
      setPrice(response.data.ethereum.usd);
    };
    fetchPrice();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', background: '#333' }}>
      <h1 style={{ color: '#00CC00' }}>Ethereum Price: ${price}</h1>
    </div>
  );
};

export default Price;
