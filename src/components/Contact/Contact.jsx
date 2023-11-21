import PropTypes from 'prop-types';
import css from './Contact.module.css';

function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <div className={css.container}>
      <div>
        <p className={css.name}>{name}: </p>
      </div>
      <div>
        <p className={css.name}>{number}</p>
        
      </div>
      <button
          type="button"
          onClick={() => onDeleteContact(contactId)}
          className={css.button}
        >
          Delete
        </button>
        </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;