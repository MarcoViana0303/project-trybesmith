import express from 'express';
import routerProduct from './routes/product.routes';
import routerUser from './routes/user.routes';

const app = express();

app.use(express.json());
app.use('/products', routerProduct);
app.use('/users', routerUser);

export default app;
