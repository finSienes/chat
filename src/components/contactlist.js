import React, { useState, useEffect } from "react";
import AddContact from "./addcontact";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Load contacts from localStorage on component mount
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // Update localStorage whenever contacts change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <AddContact onAddContact={handleAddContact} />
      <div>
        {contacts.map((contact, index) => (
          <div key={index}>
            {contact.name} - {contact.email}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
