import express from "express";
import connectDB from "./db.js";
const app = express();
//body parser
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT | 3001;
import menteeRoutes from "./routes/menteeRoutes.js";

app.use("/mentees", menteeRoutes);
//connect to database
connectDB();

app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
