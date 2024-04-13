import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";

import { selectContacts, selectNameFilter } from "../../redux/selectors.js";
import { useSelector } from "react-redux";

import Notification from "../Notification/Notification.jsx";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!contacts.length) return <Notification title={"No contacts yet"} />;

  if (!filteredContacts.length)
    return <Notification title={"Contacts are not found"} />;

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
