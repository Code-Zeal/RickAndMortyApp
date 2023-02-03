import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import { Link } from "react-router-dom";

export default function Detail() {
  const [character, setCharacter] = useState("");
  let { id } = useParams();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);
  const origin = { ...character.origin };
  console.log(origin.name);
  console.log(character);
  return (
    <div className={styles.divImage}>
      <div className={styles.divDetail}>
        <p className={styles.p}>NOMBRE:{character.name}</p>
        <p className={styles.p}>ESTADO:{character.status}</p>
        <p className={styles.p}>ESPECIE:{character.species}</p>
        <p className={styles.p}>GENERO:{character.gender}</p>
        <p className={styles.p}>ORIGEN:{origin.name}</p>
        <p className={styles.pe}>ID:{character.id}</p>
        <Link className={styles.link} to={"/home"}>
          Volver
        </Link>
      </div>
      <img
        className={styles.imagen}
        src={character.image}
        alt="characterImage"
      />
    </div>
  );
}
