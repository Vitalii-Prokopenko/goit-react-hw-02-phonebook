// List of contacts
import PropTypes from 'prop-types';
import Item from '../item/Item';
import css from 'components/contactList/contact-list.module.css';

const ContactList = ({ contacts, filter, handleContactDelete }) => (
  <ul className={css['contactList']}>
    <Item
      contacts={contacts}
      filter={filter}
      handleContactDelete={handleContactDelete}
    />
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
  handleContactDelete: PropTypes.func.isRequired,
};
