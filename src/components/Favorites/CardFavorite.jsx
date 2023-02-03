import { Link } from "react-router-dom";
import styles from "./CardFavorite.module.css";
import { connect } from "react-redux";

function CardFavorite(props) {
  if (!!props.id) {
    return (
      <div className={styles.divPortal}>
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
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(CardFavorite);
