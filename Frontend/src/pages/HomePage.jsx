import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  SimpleGrid,
  Spinner,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";
import api from "../services/api";
import BookCard from "../components/BookCard";

function HomePage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLogin } = useContext(AuthContext);
  const toast = useToast();

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await api.get("/books");
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  const handleAddBook = async (bookId) => {
    if (!isLogin) {
      toast({
        title: "Login required",
        description: "Please login to add books to your list.",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      await api.post(`/mybooks/${bookId}`);
      toast({
        title: "Book added",
        description: "Added to your My Books!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: "Already added",
        description: err.response?.data || "Book already in your list.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={8}>
      <Heading mb={6}>Available Books</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {books.map((book) => (
          <BookCard key={book._id} book={book} handleAddBook={handleAddBook} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
