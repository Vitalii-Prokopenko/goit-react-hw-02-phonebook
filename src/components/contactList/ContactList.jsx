// List of contacts
import PropTypes from 'prop-types';
import Item from '../item/Item';
import css from 'components/contactList/contact-list.module.css';

const ContactList = ({ contacts, handleContactDelete }) => (
  <ul className={css['contactList']}>
    {contacts.map(contact => (
      <Item
        key={contact.id}
        contact={contact}
        handleContactDelete={handleContactDelete}
      />

      // <li key={contact.id} className={css['contact-item']}>
      //   {contact.name} {contact.number}
      //   <button
      //     className={css['btnDelete']}
      //     type="button"
      //     onClick={() => {handleContactDelete(contact.id)}}
      //     name={filteredContact.id}
      //   >
      //     Delete
      //   </button>
      // </li>
    ))}

    {/* <Item
      contacts={contacts}
      filter={filter}
      handleContactDelete={handleContactDelete}
    /> */}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleContactDelete: PropTypes.func.isRequired,
};
