import styles from "./About.module.css";
import { FaGithub, FaTwitter } from "react-icons/fa";
import yo from "./img/yo.png";

export const About = () => {
  return (
    <div className={styles.divMain}>
      <img className={styles.image} src={yo} alt="MarceloGarciaImage" />
      <div>
        <h1 className={styles.name}>Frontend Made By:</h1>
        <h1 className={styles.name}>Marcelo Garcia</h1>
        <h3 className={styles.parrafo}>
          Single Page Aplication Responsive, realizada durante el Modulo
          2(Frontend) soyHenry carrera FullStack con React, de Rick And Morty,
          esta Aplication contiene: sistema de login y logout por localStorage,
          petición a API Rick and Morty(agregar por id, agregar random, home,
          about y detalle de cada tarjeta), es responsiva, apartado favoritos
          con filtro en orden ascendiente y descendiente (hecho con con
          Redux...)
        </h3>
        <div className={styles.links}>
          <h3 className={styles.apiRedes}>API utilizada:</h3>
          <a
            className={styles.enlace}
            href="https://rickandmortyapi.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://rickandmortyapi.com/
          </a>
          <h3 className={styles.apiRedes}>Redes Sociales:</h3>
          <a
            className={styles.enlace}
            href="https://github.com/Code-Zeal"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className={styles.enlace}
            href="https://twitter.com/code_zeal"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};
