import { nanoid } from 'nanoid';

import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styles from './phone-book.module.css';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Contacts/Filter/Filter';
import Contacts from './Contacts/Contacts';

import { addContact, deleteContact } from '../../redux/actions';

const PhoneBook = () => {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  console.log(contacts);

  const [filter, setFilter] = useState('');

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
  /*
  const changeFilter = useCallback(({ target }) => setFilter(target.value), []);

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name, phone }) => {
      const normalizedName = name.toLowerCase();
      const normalizedPhone = phone.toLowerCase();

      return (
        normalizedName.includes(normalizedFilter) ||
        normalizedPhone.includes(normalizedFilter)
      );
    });

    return filteredContacts;
  };

  const items = getFilteredContacts();
*/
  return (
    <div className={styles.wrapper}>
      <h2>Phonebook</h2>
      <PhoneBookForm onSubmit={onAddСontact} />
      <h2>Contacts</h2>
      <Filter />

      <Contacts items={contacts} deleteContact={onDeleteСontact} />
    </div>
  );
};

export default PhoneBook;
