import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";
import bannerHome from "./components/Banner/images/banner-home.png"
import bannerAssistir from "./components/Banner/images/banner-assistir.png"
import bannerFavoritos from "./components/Banner/images/banner-favoritos.png"

function App() {
  return (
    <div>
      <Header />
      <Banner image={bannerHome}/>
      <Container>
        <h1>Hello Word!</h1>
        <p>Dale familia</p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
