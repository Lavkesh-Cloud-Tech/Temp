import MovieProps from "../interfaces/MovieProps";

export const MovieDetails: React.FC<MovieProps> = ({
  episode_id,
  title,
  release_date,
  opening_crawl,
  director,
}) => {
  return (
    <div>
      <div key={episode_id}>
        <p>No Movies Displayed!!</p>
        <p>
          <b>{title}</b>
        </p>
        <p>{opening_crawl}</p>
        <p>{director}</p>
      </div>
    </div>
  );
};