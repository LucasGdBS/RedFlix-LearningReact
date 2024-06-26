import styles from "./Form.module.css";

function Form() {
  return (
    <section className={styles.container}>
      <h2>Cadastro de vídeo</h2>
      <form>
        <div>
          <label>URL do vídeo</label>
          <input
            type="text"
            placeholder="Digite a URL do vídeo"
            required="required"
          />
        </div>
        <div>
          <label>Categoria do vídeo</label>
          <select>
            <option value="-">Selecione uma Categoria</option>
          </select>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </section>
  );
}

export default Form;