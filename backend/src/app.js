import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// settings
app.set('port', process.env.PORT || 8000);


export default app;

