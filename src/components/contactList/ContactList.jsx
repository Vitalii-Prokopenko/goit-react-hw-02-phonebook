// List of contacts
import PropTypes from 'prop-types';
import css from 'components/contactList/contact-list.module.css';

const ContactList = ({ contacts, filter }) => (
  <ul className={css['contactList']}>
    {contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(filteredContact => (
        <li key={filteredContact.id}>
          {filteredContact.name} {filteredContact.number}
        </li>
      ))}
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
  filter: PropTypes.string.isRequired,
};
