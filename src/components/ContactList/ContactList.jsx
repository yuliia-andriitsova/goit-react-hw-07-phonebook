import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/phonebook/selectors';
import { ContactItem } from './ContactItem';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  return (
    <>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            name={contact.name}
            number={contact.number}
            key={contact.id}
            id={contact.id}
          />
        ))}
      </ul>
    </>
  );
};
export { ContactList };
