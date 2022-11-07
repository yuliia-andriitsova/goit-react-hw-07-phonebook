import { PhoneBook } from './PhoneBook';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        fontSize: 15,
        color: '#010101',
        gap: 10,
        border: '2 px solid red',
        padding: '50px',
      }}
    >
      <PhoneBook />
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export { App };
