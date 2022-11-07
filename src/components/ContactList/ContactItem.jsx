import { useDispatch } from 'react-redux';
import { onDeleteContactAction } from 'redux/phonebook/phonebookSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(onDeleteContactAction(id));
  };

  return (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export { ContactItem };
