import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  handleDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
