import styles from "./MainForm.module.css";
import { AddContainer } from "./AddContainer";
import { NavContainer } from "./NavContainer";
import { MainContainer } from "./MainContainer";

function MainForm() {
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

export { MainForm };
