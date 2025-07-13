import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Spacer,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import { AuthContext } from "../context/AuthContextProvider";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const { isLogin, setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && isLogin) {
      try {
        const decoded = jwtDecode(token);
        setUserEmail(decoded.email || decoded.name || "User");
      } catch (err) {
        console.error(err);
      }
    } else {
      setUserEmail("");
    }
  }, [isLogin]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    navigate("/login");
  };

  return (
    <Box bg={bgColor} px={4} py={2} boxShadow="md" position="sticky" top="0" zIndex="1000">
      <Flex alignItems="center">
        <Text fontWeight="bold" fontSize="xl">
          My Library
        </Text>
        <HStack spacing={4} ml={8}>
          <Link as={RouterLink} to="/">Home</Link>
          {isLogin && <Link as={RouterLink} to="/mybooks">My Books</Link>}
          {!isLogin && <Link as={RouterLink} to="/signup">Register</Link>}
          {!isLogin && <Link as={RouterLink} to="/login">Login</Link>}
        </HStack>
        <Spacer />
        <HStack>
          {isLogin && (
            <Text fontSize="sm" color="gray.600" mr="4" fontWeight="bold">
             👋 Hi, {userEmail}
            </Text>
          )}
          {isLogin && (
            <Button size="sm" colorScheme="blue" onClick={()=>navigate("/profilepage")} fontWeight="bold">
              My Profile
            </Button>
          )}
          <DarkMode />
          {isLogin && (
            <Button size="sm" colorScheme="teal" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
