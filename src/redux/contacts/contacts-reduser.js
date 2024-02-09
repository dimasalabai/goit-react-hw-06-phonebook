import { ADD_CONTACT, DELETE_CONTACT } from './contacts-constants';

const initialState = [];

const contactsReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      return [...state, payload];

    case DELETE_CONTACT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

export default contactsReduser;
