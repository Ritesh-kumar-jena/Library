const express = require("express");
const { auth } = require("../Middelware/auth");
const { myBooks } = require("../Model/myBookModel");

const myBookRoute = express.Router();

myBookRoute.use(auth)

myBookRoute.get("/", async (req, res) => {
  try {
    const books = await myBooks.find({ userId: req.userData._id }).populate("bookId");
    res.status(200).send(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


myBookRoute.post("/:bookId",  async (req, res) => {
  const { bookId } = req.params;
  try {
    const exist = await myBooks.findOne({ userId: req.userData._id, bookId });
    if (exist) {
      return res.status(400).send("Book already added");
    }
    const newMyBook = new myBooks({
      userId: req.userData._id,
      bookId: bookId,
    });
    await newMyBook.save();
    res.status(201).send(newMyBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


myBookRoute.patch("/:bookId/status", async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;
  try {
    const updated = await myBooks.findOneAndUpdate(
      { userId: req.userData._id, bookId },
      { status },
      { new: true }
    );
    res.status(200).send(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


myBookRoute.patch("/:bookId/rating", async (req, res) => {
  const { bookId } = req.params;
  const { rating } = req.body;
  try {
    const updated = await myBooks.findOneAndUpdate(
      { userId: req.userData._id, bookId },
      { rating },
      { new: true }
    );
    res.status(200).send(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { myBookRoute };
