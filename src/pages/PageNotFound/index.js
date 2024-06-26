import styles from "./PageNotFound.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.container}>
          <h1>404</h1>
          <p>Page not found</p>
          <Link to="/">Go back to home</Link>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default PageNotFound;
