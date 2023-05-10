// Item of contact
import PropTypes from 'prop-types';

const Item = ({ contacts, filter }) => (
  <>
    {contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(filteredContact => (
        <li key={filteredContact.id}>
          {filteredContact.name} {filteredContact.number}
        </li>
      ))}
  </>
);

export default Item;

Item.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};
