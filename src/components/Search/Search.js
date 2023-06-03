import React, { useRef } from 'react';
import styles from './search.module.css';
import { getResults } from '../../redux/actions/results';
import { useDispatch, useSelector } from 'react-redux';
const Search = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.results);

  const handleSearchHandler = (event) => {
    event.preventDefault();
    const searchQuery = inputRef.current.value;
    dispatch(getResults(searchQuery));
  };

  return (
    <div>
      <div className={styles['search-container']}>
        <form onSubmit={handleSearchHandler}>
          <input ref={inputRef} type="text" placeholder="Anime Name" />
          <button>Go</button>
        </form>
      </div>
      <p className={styles['requesting-title']}>
        <span>Requesting </span>
        <span>https://api.jikan.moe/v4/anime?q={query || ''}</span>
      </p>
    </div>
  );
};

export default Search;
