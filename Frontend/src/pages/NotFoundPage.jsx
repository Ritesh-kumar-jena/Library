import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mb={4}>
        404 - Page Not Found
      </Heading>
      <Text mb={6}>Oops! The page you’re looking for does not exist.</Text>
      <Button
        as={RouterLink}
        to="/"
        colorScheme="teal"
        variant="solid"
      >
        Back to Home
      </Button>
    </Box>
  );
}

export default NotFoundPage;
