import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const [id, setid] = useState("");
  const handleInputChange = (e) => {
    setid(e.target.value);
  };
  return (
    <div className={styles.divSearch}>
      <Link to={"/detail"} />
      <input
        placeholder="Introduce el ID"
        className={styles.input}
        type="search"
        onChange={handleInputChange}
      />

      <button className={styles.boton} onClick={() => props.onSearch(id)}>
        Agregar
      </button>
      <button
        className={styles.boton}
        onClick={() =>
          props.onSearch(`${Math.floor(Math.random() * (826 - 0 + 1) + 0)}`)
        }
      >
        aleatorio
      </button>
    </div>
  );
}
