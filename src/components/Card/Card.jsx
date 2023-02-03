import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  //FUNCION QUE HACE EL CAMBIO DE COLOR DEL CORAZÓN Y DISPATCH DE ADD O DELETE
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  };
  //useEffect COMPRUEBA SI EL PRESONAJE QUE CONTIENE ESTA CARD YA ESTÁ DENDRO DE FAVORITES
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites, props.id]);

  return (
    <div className={styles.divPortal}>
      {/* CONDICIONAL PARA RENDERIZAR EL BOTÓN DEL CORAZÓN Y QUE ESTE EJECUTE handleFavorite AL PRESIONAR  */}
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button
        className={styles.botonX}
        onClick={() => {
          //LE AGREGUÉ ESTO AL BUTTON X PARA QUE SE ELIMINEN EN AMBOS LADOS LA CARD
          props.deleteFavorite(props.id);
          props.onClose(props.id);
        }}
      >
        X
      </button>

      <Link className={styles.link} to={`/detail/${props.id}`}>
        <h2 className={styles.name}>{props.name}</h2>
        <h2 className={styles.species}>{props.species}</h2>
        <h2 className={styles.gender}>{props.gender}</h2>
        <h2 className={styles.name}>{props.id}</h2>
        <img className={styles.img} src={props.image} alt="characterImage" />
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (id) => dispatch(deleteFavorite(id)),
    addFavorite: (personaje) => dispatch(addFavorite(personaje)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
