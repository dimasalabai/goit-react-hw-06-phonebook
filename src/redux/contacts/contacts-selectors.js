export const getAllContacts = store => store.contacts;

export const getFilteredContacts = store => {
  const { contacts, filter } = store;
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
