import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.cardsDiv}>
      {characters.map((x) => (
        <Card {...x} onClose={props.onClose} key={x.id} />
      ))}
    </div>
  );
}
