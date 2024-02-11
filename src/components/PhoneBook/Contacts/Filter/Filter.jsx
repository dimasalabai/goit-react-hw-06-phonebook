import { useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';

import { setFilter } from '../../../../redux/filter/filter-slice';

import styles from './filter.module.css';

const Filter = () => {
  const search = nanoid();
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.formGroup}>
      <label htmlFor={search}> Search contacts by name or phone</label>
      <input
        id={search}
        onChange={changeFilter}
        name="filter"
        placeholder="Search"
      />
    </div>
  );
};

export default Filter;
