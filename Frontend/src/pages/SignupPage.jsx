import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormLabel,
  useToast,
  Text
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function SignupPage() {
  const navigate = useNavigate();
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const res = await api.post("/users/signIn", form);
      toast({
        title: "Signup Successful",
        description: res.data,
        status: "success",
        duration: 3000,
        isClosable: true
      });
      navigate("/login");
    } catch (error) {
      toast({
        title: "Signup Failed",
        description: error.response?.data || "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true
      });
    }
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt="50px"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      position="absolute"
    >
      <FormLabel>Name</FormLabel>
      <Input
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <FormLabel>Email</FormLabel>
      <Input
        name="email"
        type="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <FormLabel>Password</FormLabel>
      <Input
        name="pass"
        type="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <Button
        mt="4"
        colorScheme="teal"
        onClick={handleSignup}
        isDisabled={!form.name || !form.email || !form.pass}
      >
        Sign Up
      </Button>

      <Text fontWeight="bold" color="gray.600" mb="2">
        <u>If already have account</u>
      </Text>
      <Button
        onClick={() => navigate("/login")}
        colorScheme="teal"
        _hover={{ bg: "cyan.600", fontWeight: "bold" }}
      >
        Login
      </Button>
    </Box>
  );
}

export default SignupPage;
