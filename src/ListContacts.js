import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component{
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
  }
  state ={
    query: ''
  }
  handleChange(e){
    this.setState((prevState)=>({
      query: e.target.value
    }))
  }

  render() {
    return (
      <div className="list-contacts">
        <div className="list-contact-top">
          <input type="text" className="search-contacts" placeholder="Search Contacts" value={this.state.query} onChange={this.handleChange} />
        </div>
        <ol className="contact-list">
            {this.props.contacts.map(contact => (
              <li key={contact.id} className='contact-list-item'>
                <div className="contact-avatar" 
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}>
                </div>
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>@{contact.handle}</p>
                </div>
                <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">X</button>
              </li>
            ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts;
