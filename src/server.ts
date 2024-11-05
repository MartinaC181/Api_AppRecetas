
import dotenv from 'dotenv';
import dbconnect from './config/db';
import routes from './routes/routes';

dotenv.config();

const express = require('express');
const cors = require('cors');

const PORT = parseInt(process.env.PORT ?? "5000", 10);
const HOST = process.env.HOST ?? "localhost";
const app= express();

app.use(cors(
  {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }
));

app.use('/api', routes);

dbconnect();

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});



