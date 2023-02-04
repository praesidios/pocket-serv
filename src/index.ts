import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL as any,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any
    );

    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
