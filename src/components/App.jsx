import React, {Component} from 'react';
import Section from './Section/Section';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
export class App extends Component{
  constructor(){
    super();
  this.state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
}
componentDidMount() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts) {
    this.setState({ contacts: JSON.parse(savedContacts) });
  }
}
handleSubmit = (name, number) => {
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  const { contacts } = this.state;
  if (
    contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    )
  ) {
    return alert(`${name} is already exist. Please enter another name!`);
  } 
  else if (contacts.find(contact => contact.number === number)) {
    return alert(`${number} is already exist. Please enter another phone number!`);
  } else {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }),
    () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    );
  }
};

handleChange = evt => {
  this.setState({ filter: evt.currentTarget.value.toLowerCase() });
};


handleDeleteContact = contactId =>{
  this.setState(prevState => ({contacts : prevState.contacts.filter(contact => contact.id !== contactId)
  }),
  () => {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
  )
}


render() {
  const { filter, contacts } = this.state;
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
    );
    return (
      <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding:'10px 0px'
            }}
          >
      <Section title="Phonebook">
        <PhoneBook onSubmit={this.handleSubmit}/>
      </Section>
      <Section title="Contacts">
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.handleChange}/>
          )}
          {contacts.length > 0 ? (
        <Contacts contacts={filteredContacts} onDeleteContact={this.handleDeleteContact}/>
      ) : (
       <p>Your phonebook is empty.Please add a new contact.</p>
      )}
      </Section>
      </div>
      );
    }
  }