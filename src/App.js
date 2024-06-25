import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
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
        {
          /* Lógica para agrupar os vídeos por categoria */
          Array.from(new Set(videos.map((item) => item.category))).map((category) => (
            <Category key={category} category={category}>
              {videos
                .filter((video) => video.category === category)
                .map((item) => (
                  <Card key={item.id} id={item.id} />
                ))}
            </Category>
          ))
        }
      </Container>
      <Footer />
    </div>
  );
}

export default App;
