import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import styles from './Detail.module.css';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState('');
  // url의 상세정보 알려줌 path 지정해놓은 /move/:id -> id 그대로 가져오면 됨.
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <MovieDetail
            title={movie.title}
            runTime={movie.runtime}
            coverImg={movie.medium_cover_image}
            year={movie.year}
            rating={movie.rating}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
