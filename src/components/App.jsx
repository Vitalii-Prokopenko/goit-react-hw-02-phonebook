import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/app.module.css';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Form from './form/Form';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    contacts.push({ id: nanoid(), name: name, number: number });
    this.setState({
      contacts: contacts,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div
          style={{
            height: '20vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          React homework template
        </div>
        <div className={css['phoneBook']}>
          <h1 className={css['phoneBook-title']}>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />
          <div className={css['phoneBook-wrap']}>
            <h2 className={css['title']}>Contacts</h2>
            <Filter
              filter={filter}
              handleInputChange={this.handleInputChange}
            />
            <ContactList contacts={contacts} filter={filter} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
