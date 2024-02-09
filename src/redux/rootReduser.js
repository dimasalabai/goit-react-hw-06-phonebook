import { combineReducers } from 'redux';

import contactsReduser from './contacts/contacts-reduser';
import filterReduser from './filter/filter-reduser';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

export default rootReduser;
