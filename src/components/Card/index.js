import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./images/favorite.png";
import iconUnfavorite from "./images/unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ id }) {

  const {favorite, addFavorite} = useFavoriteContext();

  const isFavorite = favorite.some((item) => item.id === id);
  const icone = isFavorite ? iconUnfavorite : iconFavorite;

  return (
    <section className={styles.card}>
      <Link to={`/watch/${id}`}>
        <img
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="Capa"
          className={styles.cover}
        />
      </Link>
      <figure className={styles.icon}>
        <img 
          src={icone} 
          alt="icone de Favoritar"
          onClick={() => addFavorite({id})}  
        />
      </figure>
    </section>
  );
}

export default Card;
