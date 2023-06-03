import styles from './app.module.css';
import Result from './components/Results/Results';
import Search from './components/Search/Search';
const App = () => {
  return (
    <main className={styles.main}>
      <section className={styles['search-section']}>
        <Search />
      </section>
      <Result />
    </main>
  );
};

export default App;
