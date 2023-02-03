import error404 from "./img/404.jpg";
import styles from "./Error404.module.css";
export const Error404 = () => {
  return (
    <div>
      <img className={styles.img} src={error404} alt="" />
    </div>
  );
};
