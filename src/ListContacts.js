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
  handleChange = (query) => {
    this.setState(()=>({
      query: query.trim(),
    }))
  }
  
  clearQuery= () =>{
    this.handleChange('')
  }

  render() {
    const { query } = this.state;
    const { contacts , onDeleteContact } = this.props;
    const showingContacts = query === ''? contacts 
    : contacts.filter((contact)=> (
      contact.name.toLowerCase().includes(query.toLowerCase())
    )) 
    return (
      <div className="list-contacts">
        <div className="list-contact-top">
          <input type="text" className="search-contacts"
            placeholder="Search Contacts" value={this.state.query}
            onChange={(e)=> this.handleChange(e.target.value)} />
        </div>
        {query.length >= 1 &&
          <div className="showing-contact">
           <span>Showing {showingContacts.length} of {contacts.length} </span>
           <button onClick={this.clearQuery} >Show all</button>
          </div>
        }
        <ol className="contact-list">
            {showingContacts.map(contact => (
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
                <button onClick={() => onDeleteContact(contact)} className="contact-remove">X</button>
              </li>
            ))}
        </ol>
      </div>
    )
  }
}

export default ListContacts;
