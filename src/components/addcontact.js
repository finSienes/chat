import React, { useState } from "react";

const AddContact = ({ onAddContact }) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!name || !email) {
      alert("Please provide name and email.");
      return;
    }
    const newContact = { name, email };
    onAddContact(newContact);
    setName("");
    setEmail("");
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Add Contact</button>
      {showModal && (
        <div>
          <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit">Save</button>
              <button onClick={closeModal}>Cancel</button>
            </form>
          </div>
          <div onClick={closeModal} />
        </div>
      )}
    </div>
  );
};

export default AddContact;
