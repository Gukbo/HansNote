import styles from "./MainForm.module.css";
import AddContainer from "./AddContainer";
import NavContainer from "./NavContainer";
import MainContainer from "./MainContainer";

export default function MainForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.MainForm}>
        <NavContainer />
        <MainContainer />
        <AddContainer />
      </div>
    </div>
  );
}
