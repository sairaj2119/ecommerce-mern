import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  return res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `server runnning in ${process.env.NODE_ENV.toUpperCase()} mode on port ${PORT}`
      .black.bgWhite
  );
});
