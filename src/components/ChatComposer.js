import React, { useState } from "react";

const ChatComposer = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatComposer;
