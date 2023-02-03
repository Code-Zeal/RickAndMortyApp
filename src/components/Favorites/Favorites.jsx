import React from "react";
import { connect, useDispatch } from "react-redux";
import CardFavorite from "./CardFavorite.jsx";
import { orderCards, filterCards } from "../../redux/actions.js";
import styles from "./Favorites.module.css";

const Favorites = (props) => {
  const dispatch = useDispatch();

  //FUNCIONES DE LOS SELECTORES
  const filterHandler = (e) => {
    dispatch(filterCards(e.target.value));
  };
  const orderHandler = (e) => {
    dispatch(orderCards(e.target.value));
  };

  return (
    <div>
      <div className={styles.filters}>
        {/* SELECT ASCENDIENTE Y DESCENDIENTE */}
        <select
          defaultValue={"Ascendiente"}
          className={styles.select}
          onChange={(e) => orderHandler(e)}
          name="order"
          id=""
        >
          <option value="Descendiente">Descendiente</option>
          <option value="Ascendiente">Ascendiente</option>
        </select>
        {/* SELECT FILTRO DE GENERO */}
        <select
          defaultValue={"All"}
          className={styles.select}
          onChange={(e) => filterHandler(e)}
          name="gender"
          id=""
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className={styles.cardsDiv}>
        {/* RENDERIZADO DE LAS CARD EN FAVORITES*/}
        {props.myFavorites.map((el, index) => (
          <CardFavorite {...el} key={index} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
