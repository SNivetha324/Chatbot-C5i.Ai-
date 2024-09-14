import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaRegSmile } from 'react-icons/fa';
import Message from './Message';

const ChatContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: #f7f9fc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ChatHeader = styled.div`
  background-color: #4a90e2;
  color: white;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const ChatBody = styled.div`
  padding: 15px;
  height: 400px;
  overflow-y: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: #f1f1f1;
  align-items: center;
  justify-content: space-between;
`;

const ChatInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #4a90e2;
  border: none;
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: #357ABD;
  }
`;

const TypingIndicator = styled.div`
  font-style: italic;
  color: #aaa;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  useEffect(() => {
    if (input.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [input]);

  return (
    <ChatContainer>
      <ChatHeader>Chatbot Support</ChatHeader>
      <ChatBody>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        {isTyping && <TypingIndicator>Chatbot is typing...</TypingIndicator>}
      </ChatBody>
      <ChatInputContainer>
        <ChatInput
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chat;
