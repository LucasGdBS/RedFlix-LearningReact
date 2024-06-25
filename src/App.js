import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

import bannerHome from "./components/Banner/images/banner-home.png";

function App() {
  return (
    <div>
      <Header />
      <Banner image={bannerHome} />
      <Container>
        <h2>Categoria generica</h2>
        <section className="cards-container">
          {videos.map((item) => (
            <Card key={item.id} id={item.id} />
          ))}
        </section>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
