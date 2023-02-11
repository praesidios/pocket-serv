import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './router';

mongoose.set('strictQuery', true);

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL as string,
      ({
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as unknown) as never,
    );

    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log('ERRPR');
    console.log(error);
  }
};

start();
