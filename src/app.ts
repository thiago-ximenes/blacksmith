import express from 'express';
import productRouter from './routers/productRouters';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

export default app;
