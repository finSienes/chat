import React from "react";

const ChatHistory = ({ messages }) => {
  if (!messages) {
    return <p>No messages available.</p>;
  }

  return (
    <div>
      <h3>Chat History</h3>
      {messages.length === 0 ? (
        <p>No messages available.</p>
      ) : (
        messages.map((message, index) => (
          <div key={index}>
            <p>{message.sender}</p>
            <p>{message.text}</p>
            <p>{message.timestamp}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatHistory;
