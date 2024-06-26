import styles from "./Form.module.css";
import videosJson from "../../json/videos.json";
import { useState } from "react";

function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  function validarURLYouTube(url) {
    const regex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/|v\/|.+\?v=)?([a-zA-Z0-9_-]{11})(\S*)?$/;

    if (!regex.test(url) || url.length < 43) {
      setError("ERRO: URL inválida!");
      return false;
    } else {
      return url.substring(32, 43); // id do video
    }
  }

  function onSave(event) {
    event.preventDefault();

    // Validar categoria
    if (!category || category === "-") {
      setError("Erro: Selecione uma categoria!");
      return;
    }
    // Validar se a URL é válida
    const videoId = validarURLYouTube(url);
    if (videos.find((video) => video.url === url)) {
      setError("Erro: Vídeo já cadastrado!");
      return;
    }

    if (videoId) {
      // Salva os videos
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));

      // Limpa os campos do formulário
      setError("");
      setUrl("");
      setCategory("");
    }else{
      setError("ERRO: URL inválida!");
    }
  }

  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <form onSubmit={onSave}>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            minLength="43"
            maxLength="43"
          />
        </div>
        <div>
          <label>Categoria do vídeo</label>
          <select
            required="required"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="-">Selecione uma Categoria</option>
            {Array.from(new Set(videosJson.map((item) => item.category))).map(
              (category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
        <div>{error}</div>
      </form>
    </section>
  );
}

export default Form;
