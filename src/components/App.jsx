import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/app.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name, number } = this.state;
    contacts.push({ id: nanoid(), name: name, number: number });
    this.setState({
      contacts: contacts,
    });
  };

  // handleSearchInputChange = event => {
  //   this.handleInputChange(event);
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact => contact.name.includes(filter));
  // };

  render() {
    const { contacts, filter, name, number } = this.state;
    // const filteredContacts = this.handleSearchInputChange();
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
        <form className={css['form']} onSubmit={this.handleSubmit}>
          <label className={css['labelName']}>
            Name
            <input
              className={css['inputName']}
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={css['labelName']}>
            Number
            <input
              className={css['inputName']}
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
          <button className={css['btnSubmit']} type="submit">
            Add contact
          </button>
        </form>
        <div className={css['phoneBook']}>
          <p className={css['title']}>Contacts</p>
          <p className={css['subtitle']}>Find contacts by name</p>
          <input
            className={css['inputSearchName']}
            type="text"
            name="filter"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={filter}
            onChange={this.handleInputChange}
          />
          <ul className={css['contactList']}>
            {contacts
              .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
              .map(filteredContact => (
                <li key={filteredContact.id}>
                  {filteredContact.name} {filteredContact.number}
                </li>
              ))}            
          </ul>
        </div>
      </>
    );
  }
}

export default App;
