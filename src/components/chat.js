import React, { useState } from "react";
import ChatComposer from "./ChatComposer";
import ChatHistory from "./chathistory";
import Notification from "./Notification";
import ContactList from "./contactlist";

const Chat = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleSendMessage = (message) => {
    const newMessage = {
      text: message,
      sender: user.displayName,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNotification("New message received");
  };

  return (
    <div>
      {notification && <Notification message={notification} />}
      <h2>Chat</h2>
      <ContactList />
      <ChatHistory messages={messages} />
      <ChatComposer onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
