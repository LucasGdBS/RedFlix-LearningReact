import styles from "./SearchVideoList.module.css";
import VideoList from "../VideoList";
import { useState } from "react";

function filtrarVideos(videos, searchText) {
  if (!searchText) {
    return videos;
  }
  searchText = searchText.toUpperCase();
  return videos.filter(
    (video) =>
      video.category.toUpperCase().includes(searchText) ||
      video.title.toUpperCase().includes(searchText)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState("");

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <VideoList
        videos={filtrarVideos(videos, searchText)}
        emptyHeading={`Nenhum vídeo encontrado para "${searchText}"`}
      />
    </section>
  );
}

export default SearchVideoList;
