// List of contacts
import PropTypes from 'prop-types';
import Item from '../item/Item';
import css from 'components/contactList/contact-list.module.css';

const ContactList = ({ contacts, filter }) => (
  <ul className={css['contactList']}>
    <Item contacts={contacts} filter={filter} />
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
