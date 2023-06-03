import { useDispatch, useSelector } from 'react-redux';
import styles from './results.module.css';
import { useEffect, useState } from 'react';
import ResultCard from '../ResultCard/ResultCard';
import { getResults } from '../../redux/actions/results';

const Result = () => {
  const { results, loading, query } = useSelector((state) => state.results); // Accessing results, loading, and query from the Redux store
  const [resultsDisplay, setResultsDisplay] = useState([]); // Initializing state for results display
  const dispatch = useDispatch(); // Initializing dispatch function

  useEffect(() => {
    setResultsDisplay(results.data); // Updating results display state when results change
  }, [loading]);

  if (loading) return <p className={styles.loading}> Loading results </p>; // Displaying loading message if results are still loading

  if (!resultsDisplay?.length) {
    return <p className={styles.empty}>No Results found</p>;
  }

  const hasNextPage = results?.pagination?.has_next_page; // Checking if there is a next page of results

  const handleLoadMore = () => {
    const currentPage = results?.pagination?.current_page; // Getting the current page number
    dispatch(getResults(query, currentPage + 1)); // Dispatching action to get next page of results
  };

  return (
    <section>
      <div className={styles['result-container']}>
        {resultsDisplay?.map((item) => {
          // Mapping through results to display ResultCard components
          return <ResultCard key={item.mal_id} item={item} />;
        })}
      </div>
      {hasNextPage && ( // Displaying "Load More" button if there is a next page of results
        <div className={styles.more}>
          <button onClick={handleLoadMore}>Load More...</button>
        </div>
      )}
    </section>
  );
};

export default Result;
