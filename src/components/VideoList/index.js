import styles from "./VideoList.module.css";
import Card from "../Card";

function VideoList({ videos, emptyHeading }) {

  const noun = videos.length === 1 ? "vídeo" : "vídeos";
  let heading = videos.length > 0 ? `Mostrando ${videos.length} ${noun}` : emptyHeading;

  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videos}>
        {videos.map((video) => (
          <Card id={video.id} key={video.id} />
        ))}
      </section>
    </>
  );
}

export default VideoList;
