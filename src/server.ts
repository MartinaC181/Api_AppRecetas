import express from 'express';
import dotenv from 'dotenv';
import dbconnect from './config/db';
import routes from './routes/routes';

dotenv.config();

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";
const app= express();

app.use(express.json());

app.use('/api', routes);

dbconnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});



