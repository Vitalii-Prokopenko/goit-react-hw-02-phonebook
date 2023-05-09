import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from 'components/app.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { contacts, name } = this.state;
    contacts.push({ id: nanoid(), name: name });
    this.setState({
      contacts: contacts,
    });
  };

  render() {
    const contacts = this.state.contacts;
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
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <button className={css['btnSubmit']} type="submit">
            Add contact
          </button>
        </form>
        <div className={css['phoneBook']}>
          <p className={css['title']}>Contacts</p>
          <ul className={css['contactList']}>
            {contacts.map(contact => {
              return <li key={contact.id}>{contact.name}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
