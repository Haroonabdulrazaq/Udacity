import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "./utils/ContactsAPI";



class App extends Component {
  state = {
    contacts: [],
  }

  CreateContact=(contact)=>{
    ContactsAPI.create(contact)
      .then((contact)=>{
        this.setState((prevState)=>({
          contacts: [...prevState.contacts, contact]
        }))
      })
  }
//prevState.contacts.concat([contact])
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
    console.log(this.state.contacts);
    return (
      <div>
        <Switch>
          <Route exact path="/" render={()=>(
            <ListContacts 
            onDeleteContact = {this.removeContact}
            contacts = {this.state.contacts} />
          )}/>
          <Route exact path="/create" render={({ history })=> (
            <CreateContact onCreateContact={(contact)=>{
              this.CreateContact(contact)
              history.push("/")

            }}/>
          )} />
         </Switch>
      </div>
    );
  }
}

export default App;
