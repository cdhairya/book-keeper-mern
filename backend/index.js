import { PORT, MongoURI } from "./config.js";
import express from "express";
import connectDB from "./data/db.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

app.use("/api/books", bookRoutes);

// Connect DB
connectDB();
