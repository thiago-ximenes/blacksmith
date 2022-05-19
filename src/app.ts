import express from 'express';
import productRouter from './routers/productRouters';
import userRouters from './routers/userRouters';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouters);

export default app;
