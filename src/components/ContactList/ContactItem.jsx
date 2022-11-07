import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(deleteContact(id));

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};
export { ContactItem };
