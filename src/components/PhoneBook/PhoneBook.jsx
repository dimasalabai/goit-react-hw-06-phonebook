import { useSelector, useDispatch } from 'react-redux';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Contacts/Filter/Filter';
import Contacts from './Contacts/Contacts';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { addContact, deleteContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';

import styles from './phone-book.module.css';

const PhoneBook = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  // const [filter, setFilter] = useState('');

  const isDublicate = ({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      const normalizedCurrentPhone = item.phone.toLowerCase();

      return (
        normalizedCurrentName === normalizedName ||
        normalizedCurrentPhone === normalizedPhone
      );
    });

    return !!dublicate;
  };

  const onAddСontact = data => {
    // data - state форми

    if (isDublicate(data)) {
      return alert(
        `Contact with this ${data.name || data.phone} already in contacts book`
      );
    }

    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteСontact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <h2>Phonebook</h2>
      <PhoneBookForm onSubmit={onAddСontact} />
      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} />

      <Contacts items={contacts} deleteContact={onDeleteСontact} />
    </div>
  );
};

export default PhoneBook;
