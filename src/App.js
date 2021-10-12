import React, { Component } from 'react';
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";



class App extends Component {
  state = {
    contacts: []
  }

  removeContact = (contact) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((c)=> (
        c.id !== contact.id
      ))
    }))
  }

  componentDidMount(){
    ContactsAPI.getAll()
    .then(contacts => {
      this.setState({
        contacts
      })
    })
  }

  render() {
    return (
      <div>
        <ListContacts 
          onDeleteContact = {this.removeContact}
          contacts = {this.state.contacts} />
      </div>
    );
  }
}

export default App;
