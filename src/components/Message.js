// Message.js
import React from 'react';
import './Message.css'; // If you have styles for the Message component

function Message({ text, fromUser }) {
  return (
    <div className={`message ${fromUser ? 'user-message' : 'bot-message'}`}>
      {text}
    </div>
  );
}

export default Message;
