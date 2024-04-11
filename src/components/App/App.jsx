import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import PhoneBookContainer from "../PhoneBookContainer/PhoneBookContainer.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
// import { CONTACT_KEY } from "../../consts.js";

function App() {
  return (
    <PhoneBookContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />

      {/* {emptyContacts && <Notification title={"No contacts yet"} />}
      {contactsNotFound && <Notification title={"Contacts are not found"} />} */}
    </PhoneBookContainer>
  );
}

export default App;
