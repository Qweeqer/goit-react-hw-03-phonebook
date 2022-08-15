import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p>
            {name}: {number}
            <button
              className={css.listDeleteButton}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </p>
        </li>
      );
    })}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
