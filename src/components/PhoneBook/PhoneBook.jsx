import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Contacts/Filter/Filter';
import Contacts from './Contacts/Contacts';

import styles from './phone-book.module.css';

const PhoneBook = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Phonebook</h2>
      <PhoneBookForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};

export default PhoneBook;
