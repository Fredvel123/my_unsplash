import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import usersRoutes from './server/users/routers/users.routers.js';
const app = express();
// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// settings
app.set('port', process.env.PORT || 8080);
// routers
app.use('/users', usersRoutes);

export default app;

