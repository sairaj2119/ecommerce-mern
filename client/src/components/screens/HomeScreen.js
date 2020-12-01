import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

import Product from '../Product';
import { BACKEND_URL } from '../../utils/constants';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${BACKEND_URL}/api/products`);
      setProducts(data);
    })();
  }, []);

  console.log(products);
  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
