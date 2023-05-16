import PropTypes from 'prop-types';
import styles from './MovieDetail.module.css';

export default function MovieDetail({
  title,
  runTime,
  coverImg,
  genres,
  year,
  rating,
  desc,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={coverImg} alt={title} />
      <div className={styles.contentsBox}>
        <h3 className={styles.title}>🎥 &nbsp;{title}</h3>
        <div className={styles.content}>
          <p className={styles.year}>&nbsp;{year}</p>
          <ul className={styles.genres}>
            {genres.map((g) => (
              <li key={g}>&nbsp;{g}</li>
            ))}
          </ul>
          <p className={styles.time}>&nbsp;⏱️ &nbsp;{runTime}''</p>
          <p className={styles.rating}>
            &nbsp;⭐️ &nbsp;{rating}
            <span> / 10</span>
          </p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
