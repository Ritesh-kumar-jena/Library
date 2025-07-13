import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Input,
  FormLabel,
  Button,
  useToast,
  Heading,
  useColorModeValue,
  Text
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { jwtDecode } from "jwt-decode";

function ProfilePage() {
  const toast = useToast();
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const bgColor = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !isLogin) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const fetchUser = async () => {
        const res = await api.get(`/users/profile/${decoded.id}`);
        setForm({
          name: res.data.name,
          email: res.data.email
        });
      };
      fetchUser();
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  }, [isLogin, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateUser = async () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    try {
      const res = await api.patch(`/users/edit/${decoded.id}`, {
        name: form.name
      });
      toast({
        title: "Profile Updated",
        description: res.data || "Your profile was updated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Failed to update profile",
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
      bg={bgColor}
    >
      <Heading mb="6" textAlign="center">
        Edit Profile
      </Heading>

      <FormLabel>Name</FormLabel>
      <Input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <FormLabel>Email</FormLabel>
      <Input
        name="email"
        value={form.email}
        isReadOnly
      />
      <Text fontSize="sm" color="gray.500" mb="4">
        Your email cannot be changed.
      </Text>

      <Button
        mt="4"
        colorScheme="teal"
        onClick={updateUser}
        isDisabled={!form.name}
      >
        Update Profile
      </Button>
    </Box>
  );
}

export default ProfilePage;
