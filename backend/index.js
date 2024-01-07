import { PORT, MongoURI } from "./config.js";
import express from "express";
import cors from "cors";
import connectDB from "./data/db.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );
app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});

app.use("/api/books", bookRoutes);

// Connect DB
connectDB();
