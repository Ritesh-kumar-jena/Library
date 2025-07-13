const express = require("express");
const { books } = require("../Model/bookModel");

const bookRoute = express.Router();


bookRoute.get("/", async (req, res) => {
  try {
    const allBooks = await books.find();
    res.status(200).send(allBooks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = { bookRoute };
