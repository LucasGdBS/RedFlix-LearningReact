import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {

  const {favorite} = useFavoriteContext();

  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2 className={styles.title}>Meus Favoritss</h2>
          {<VideoList videos={favorite} emptyHeading="Nenhum vídeo favoritado ainda"/>}
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
