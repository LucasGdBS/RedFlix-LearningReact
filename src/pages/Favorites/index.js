import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

function Favorites() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2 className={styles.title}>Meus Favoritss</h2>
          Lista de videos favoritos
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
