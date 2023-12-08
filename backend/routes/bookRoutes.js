import express from "express";
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
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Get a single book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

export default router;
