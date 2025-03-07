import styles from "./MainForm.module.css";
import { AddContainer } from "./AddContainer";
import { NavContainer } from "./NavContainer";
import { TodoContainer } from "./TodoContainer";

function MainForm() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.MainForm}>
        <NavContainer />
        <TodoContainer />
        <AddContainer />
      </div>
    </div>
  );
}

export { MainForm };
