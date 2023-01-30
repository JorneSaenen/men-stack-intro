import dotenv from 'dotenv';
dotenv.config();
import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import movieRouter from './routes/movieRoutes.js';

//variables
const { MONGO_URL, PORT, FRONTEND_URL, NODE_ENV } = process.env;
const app = express();
const endpoint = '/api/v1/movies';
const corsOptions = {
  origin: FRONTEND_URL,
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));

//routes
app.use(endpoint, movieRouter);

// listen to server and connect db
const startServer = async () => {
  try {
    mongoose.set(`strictQuery`, true);
    mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      if (NODE_ENV === 'development') {
        console.log(chalk.bgGreen.bold(`http://localhost:${PORT}✅`));
      } else {
        console.log('Server is running...');
      }
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();