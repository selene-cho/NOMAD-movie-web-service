import PropTypes from 'prop-types';
import styles from './MovieDetail.module.css';

export default function MovieDetail({
  title,
  runTime,
  coverImg,
  genres,
  year,
  rating,
}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={coverImg} alt={title} />
      <div className={styles.contentsBox}>
        <h3 className={styles.title}>🎥 &nbsp;{title}</h3>
        <div className={styles.content}>
          <p>&nbsp;Run Time ⏱️ _ {runTime}''</p>
          <p>&nbsp;Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⭐️ _ {rating}</p>
          <p>
            &nbsp;Year &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📆 _{' '}
            {year}
          </p>
          <div className={styles.genres}>
            &nbsp;Genre &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎬 _&nbsp;
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
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
