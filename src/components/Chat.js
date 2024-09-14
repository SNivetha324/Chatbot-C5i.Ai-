import React, { useState, useEffect } from 'react';
import './Chat.css'; // No changes to the CSS
import Message from './Message'; // Ensure correct path to Message
import Avatar from './avatar.jpg'; // Avatar image remains as it is

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [quickReplies, setQuickReplies] = useState([]);

  const fetchQuickReplies = async () => {
    try {
      const response = await fetch('/api/retail-analytics-replies');
      const data = await response.json();
      setQuickReplies(data.quickReplies || []);
    } catch (error) {
      console.error('Error fetching quick replies:', error);
    }
  };

  useEffect(() => {
    fetchQuickReplies();
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromUser: true }]);
      setInput('');
    }
  };

  const handleQuickReply = (reply) => {
    setMessages([...messages, { text: reply, fromUser: false }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={Avatar} alt="Avatar" className="avatar" />
        <div className="chat-details">
          <h2>Chat with Jessica Cowles</h2>
          <p>We typically reply in a few minutes.</p>
        </div>
      </div>

      <div className="chat-body">
        {messages.map((message, index) => (
          <Message
            key={index}
            text={message.text}
            fromUser={message.fromUser}
          />
        ))}

        {quickReplies.length > 0 && (
          <div className="quick-replies">
            {quickReplies.map((reply, index) => (
              <button key={index} onClick={() => handleQuickReply(reply)}>
                {reply}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="chat-footer">
        <div className="rating">Was this helpful? 👍 👎</div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Enter your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSend}>Send</button>
          <div className="emoji-area">😊 📎</div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
