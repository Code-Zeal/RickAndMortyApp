import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Error404 } from "./components/Error404/Error404";
import Favorites from "./components/Favorites/Favorites";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import Login from "./components/Login/Login";
import background from "./img/title.png";

let personajesEnPantalla = [];
function App() {
  const [logout, setLogout] = useState(false);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout, navigate]);
  const [characters, setCharacters] = useState([]);
  function onSearch(id) {
    if (!personajesEnPantalla.includes(`${id}`)) {
      personajesEnPantalla.push(`${id}`);
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters([...characters, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      return window.alert("Ya existe");
    }
  }

  const onClose = (id) => {
    personajesEnPantalla = personajesEnPantalla.filter((p) => p !== `${id}`);
    const personajes = characters.filter((c) => c.id !== id);
    setCharacters(personajes);
  };
  let NavBarCondition = useLocation();
  //=================================RENDER======================================//
  //=================================RENDER======================================//
  //=================================RENDER======================================//
  //=================================RENDER======================================//
  //=================================RENDER======================================//
  return (
    <div className={styles.main} style={{ width: "inherit", height: "auto" }}>
      {NavBarCondition.pathname !== "/" && (
        <div>
          <img
            className={styles.imgHeader}
            src={background}
            alt="Rick&MortyTitle"
          />
          <div className={styles.divHeader}>
            <Nav onSearch={onSearch} />
            <div className={styles.botonesDiv}>
              <button className={styles.desconectarse} onClick={logoutHandler}>
                SALIR
              </button>
              <Link to={"/home"} className={styles.link}>
                HOME
              </Link>
              <Link to={"/about"} className={styles.link}>
                ABOUT
              </Link>
              {/* BOTÓN PARA IR A FAVORITES */}
              <Link to={"/favorites"} className={styles.link}>
                FAVORITES
              </Link>
            </div>
          </div>
        </div>
      )}
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <div>
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/" element={<Login />} />
        {/* RUTA DE FAVORITES */}
        <Route path="/favorites" element={<Favorites />} onClose={onClose} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
