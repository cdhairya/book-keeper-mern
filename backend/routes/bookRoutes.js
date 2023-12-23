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
    return res.status(500).json({ error: error.message });
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get a single book
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update a book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear)
      return res.status(400).json({ message: "Please enter all fields." });
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book) return res.status(404).json({ message: "Book not found" });
    // res.json(book);
    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Delete a book
router.delete("/:id", async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: "Book not found" });
    return res.status(200).json({ message: "Book is deleted" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
