import { isPropertySignature } from "typescript";
import MovieProps from "../interfaces/MovieProps";

export const MovieList: React.FC<MovieProps> = ({
  episode_id,
  title,
  release_date,
  opening_crawl,
  director,
}) => {
 
  return (
    <div>
      <ul className="moviesList">
        <li>EPISODE {episode_id}</li>
        <li>{title}</li>
        <li>{release_date}</li>
      </ul>
    </div>
  );
};