import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: ${(props) => (props.sender === 'user' ? 'flex-end' : 'flex-start')};
`;

const MessageBubble = styled.div`
  background-color: ${(props) => (props.sender === 'user' ? '#4a90e2' : '#e0e0e0')};
  color: ${(props) => (props.sender === 'user' ? 'white' : 'black')};
  padding: 10px;
  border-radius: 15px;
  max-width: 60%;
  word-wrap: break-word;
`;

const Message = ({ text, sender }) => {
  return (
    <MessageContainer sender={sender}>
      <MessageBubble sender={sender}>{text}</MessageBubble>
    </MessageContainer>
  );
};

export default Message;
