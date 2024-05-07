import { Box, Container, VStack, Text, Input, Button, IconButton, useColorMode, useColorModeValue, Flex, Avatar, Divider } from "@chakra-ui/react";
import { FaMoon, FaSun, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <Container maxW="container.md" p={0} height="100vh" bg={bgColor}>
      <Flex direction="column" height="100%">
        <Flex p={4} bg="teal.500" color="white" justifyContent="space-between" alignItems="center">
          <Avatar name="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxNTA5NjAwMHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <Text fontSize="xl" fontWeight="bold">
            Chat App
          </Text>
          <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} aria-label="Toggle theme" />
        </Flex>
        <VStack flex="1" p={4} spacing={4} overflowY="auto">
          {messages.map((message, index) => (
            <Box key={index} alignSelf={message.sender === "user" ? "flex-end" : "flex-start"} bg="blue.100" p={3} borderRadius="lg">
              <Text>{message.text}</Text>
            </Box>
          ))}
        </VStack>
        <Divider />
        <Flex p={4} alignItems="center">
          <Input placeholder="Type a message..." value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <IconButton icon={<FaPaperPlane />} ml={2} onClick={handleSendMessage} aria-label="Send message" />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
