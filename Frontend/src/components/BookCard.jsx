import React from "react";
import {
  Box,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";

function BookCard({ book, handleAddBook }) {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      _hover={{ boxShadow: "lg" }}
    >
      <Image
        src={book.coverImage}
        alt={book.title}
        mb={4}
        borderRadius="md"
        boxSize="200px"
        objectFit="cover"
        mx="auto"
      />
      <Text fontWeight="bold">{book.title}</Text>
      <Text color="gray.600">{book.author}</Text>
      <Button
        mt="4"
        colorScheme="teal"
        onClick={() => handleAddBook(book._id)}
      >
        Want to Read
      </Button>
    </Box>
  );
}

export default BookCard;
