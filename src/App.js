import React, { Component } from 'react';
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";



class App extends Component {
  state = {
    contacts: [],
    screen: "list"
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
        { this.state.screen === 'list' && <ListContacts 
          onDeleteContact = {this.removeContact}
          contacts = {this.state.contacts}
          onNavigate={()=> {
            this.setState({
              screen: "create",
            })
          }}
          />}
         {this.state.screen === 'create' && <CreateContact />}
      </div>
    );
  }
}

export default App;
