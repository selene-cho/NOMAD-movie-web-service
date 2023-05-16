import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

export default function Movie({ id, year, coverImg, title, summary, genres }) {
  return (
    <div className={styles.container}>
      <img src={coverImg} alt={title} className={styles.img} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>🎬 {title}</Link>
        </h2>
        <h3 className={styles.year}>{year}</h3>
        {/* slice(0,245) 0부터 245까지 잘라냄 */}
        <p className={styles.summary}>
          {/* {summary.length > 245 ? `${summary.slice(0, 245)}...` : summary} */}
          {summary.length === 0
            ? '-'
            : summary.length > 245
            ? `${summary.slice(0, 245)}...`
            : summary}
        </p>
        <ul className={styles.genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  // genres는 string을 가진 array여야 함
};
