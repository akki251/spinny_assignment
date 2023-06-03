import styles from './resultCard.module.css';
const ResultCard = ({ item }) => {
  return (
    <div className={styles['result-card']}>
      <div className={styles['result-img-container']}>
        <img alt={item?.title} src={item?.images?.webp?.image_url} />
      </div>
      <div className={styles['title-container']}>
        <p className={styles['result-card-title']}>{item?.title}</p>
      </div>
    </div>
  );
};

export default ResultCard;
