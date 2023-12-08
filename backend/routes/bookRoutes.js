import express from "express";
import mongoose from "mongoose";
import { Book } from "../models/BookModel.js";

const router = express();

// Create a book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear)
      return res.status(400).json({ message: "Please enter all fields." });
    const { title, author, publishYear } = req.body;
    const newBook = {
      title,
      author,
      publishYear,
    };
    const book = await Book.create(newBook);
    res.status(201).json({ message: "Book added to the store!" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

  console.log(req.body);
});

// Get all books
router.get("/", (req, res) => {
  res.send("Get / is working...");
});

export default router;
