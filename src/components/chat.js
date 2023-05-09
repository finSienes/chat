import React from "react";
import { firestore } from "../firebase";
import ContactList from "./contactlist";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: ""
    };
  }

  componentDidMount() {
    this.unsubscribe = firestore.collection("messages").onSnapshot(snapshot => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      this.setState({ messages });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = event => {
    this.setState({ newMessage: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    firestore.collection("messages").add({
      text: this.state.newMessage,
      createdAt: new Date()
    });
    this.setState({ newMessage: "" });
  };

  render() {
    return (
      <div className="container-fluid ">
        <h1>Chat</h1>
        <div className="d-flex">
        <div className="justify-content-end col me-5">
        <ul className="list-group col">
          {this.state.messages.map(message => (
            <li className="list-group-item" key={message.id}>
              {message.text}
            </li>
          ))}
        </ul>

        <form onSubmit={this.handleSubmit} className="col-12">
          <div      className="form-group">
        <label>New Message:</label>
        <input
          type="text"
          className="form-control"
          value={this.state.newMessage}
          onChange={this.handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
    </div>
    <ContactList/>
        </div>
  </div>
);
}
}

export default Chat;