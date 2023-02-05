import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

mongoose.set('strictQuery', true);
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any,
    );

    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log('ERRPR');
    console.log(error);
  }
};

start();
