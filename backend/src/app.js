import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRouters from './server/auth/routers/auth.routers.js';
import usersRoutes from './server/users/routers/users.routers.js';
import imagesRouters from './server/images/routers/images.routers.js';
const app = express();
// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// settings
app.set('port', process.env.PORT || 8000);
// routers
app.use('/users', usersRoutes);
app.use('/auth', authRouters);
app.use('/images', imagesRouters)

export default app;

