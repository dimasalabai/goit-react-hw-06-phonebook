import { useSelector, useDispatch } from 'react-redux';

import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../../redux/contacts/contacts-slice';

import styles from './contacts.module.css';

const Contacts = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteСontact = id => {
    dispatch(deleteContact(id));
  };

  const contactsItems = contacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        {name}: {phone}
        <button onClick={() => onDeleteСontact(id)} type="button">
          Delete
        </button>
      </li>
    );
  });

  return (
    <div className={styles.wrapper}>
      <ul>{contactsItems}</ul>
    </div>
  );
};

export default Contacts;
