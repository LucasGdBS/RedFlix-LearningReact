import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Container>
        <h1>Hello Word!</h1>
        <p>Dale familia</p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
