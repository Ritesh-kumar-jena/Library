import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Select,
  NumberInput,
  NumberInputField,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import api from "../services/api";

function MyBooksPage() {
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const getMyBooks = async () => {
      try {
        const res = await api.get("/mybooks");
        setMyBooks(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getMyBooks();
  }, []);

  const handleStatusChange = async (bookId, status) => {
    try {
      await api.patch(`/mybooks/${bookId}/status`, { status });
      setMyBooks((prev) =>prev.map((item) =>item.bookId._id === bookId ? { ...item, status } : item))
      toast({
        title: "Status updated",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleRatingChange = async (bookId, rating) => {
    try {
      await api.patch(`/mybooks/${bookId}/rating`, { rating });
      setMyBooks((prev) =>prev.map((item) =>item.bookId._id === bookId ? { ...item, rating } : item));
      toast({
        title: "Rating updated",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (err) {
      console.error(err);
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
      <Heading mb={6}>My Books</Heading>
      {myBooks.length === 0 ? (
        <Text>You have no books added yet.</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {myBooks.map((item) => (
            <Box
              key={item._id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"
            >
              <Image
                src={item.bookId.coverImage}
                alt={item.bookId.title}
                mb={4}
                borderRadius="md"
                boxSize="200px"
                objectFit="cover"
                mx="auto"
              />
              <Text fontWeight="bold">{item.bookId.title}</Text>
              <Text color="gray.600">{item.bookId.author}</Text>
              <Select
                mt={2}
                value={item.status}
                onChange={(e) => handleStatusChange(item.bookId._id, e.target.value)}
              >
                <option>Want to Read</option>
                <option>Currently Reading</option>
                <option>Read</option>
              </Select>
             <Select
               mt={2}
               value={item.rating}
               onChange={(e) =>
               handleRatingChange(item.bookId._id, Number(e.target.value))}
               >
                 <option value="">Select Rating</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
            </Select>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default MyBooksPage;
