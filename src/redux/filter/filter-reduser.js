import { SET_FILTER } from './filter-constants';

const initialState = '';

const filterReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;

    default:
      return state;
  }
};

export default filterReduser;
