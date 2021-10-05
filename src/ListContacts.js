import React, { Component } from 'react'

class ListContacts extends Component {
  render() {
    const contacts = this.props.contacts
    console.log(contacts);
    return (
      <div>
        <ol className="contact-list">
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ol>
      </div>
    )
  }
}
export default ListContacts;