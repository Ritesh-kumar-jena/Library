import React, { useContext, useState } from "react";
import {
  Box,
  FormLabel,
  Input,
  Button,
  useToast,
  useColorModeValue
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import api from "../services/api";

function LoginPage() {
  const { setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const bgColor = useColorModeValue("white", "gray.800");

  const [form, setForm] = useState({ email: "", pass: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/users/login", form);
      localStorage.setItem("token", res.data.token);
      setIsLogin(true);
      toast({
        title: "Login Successful",
        description: res.data.msg,
        status: "success",
        duration: 3000,
        isClosable: true
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Login Failed",
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
      bg={bgColor}
    >
      <FormLabel>Email</FormLabel>
      <Input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter Email"
        required
      />
      <FormLabel>Password</FormLabel>
      <Input
        type="password"
        name="pass"
        onChange={handleChange}
        placeholder="Enter Password"
        required
      />
      <Button
        mt="4"
        _hover={{ bg: "cyan.600", fontWeight: "bold" }}
        colorScheme="teal"
        isDisabled={!form.email || !form.pass}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

export default LoginPage;
