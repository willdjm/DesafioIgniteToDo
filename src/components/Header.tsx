import styles from "./Header.module.css";
import LogoToDo from "../assets/ToDo.svg";
import LogoFoguete from "../assets/foguete.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoFoguete} alt="Logo" />
      <img src={LogoToDo} alt="Logo" />
    </header>
  );
}
