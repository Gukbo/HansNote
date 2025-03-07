import styles from "../components/MainForm.module.css";
import { TodoListItems } from "./TodoListItems";

function TodoContainer() {
  return (
    <div className={styles.TodoContainer}>
      <TodoListItems />
    </div>
  );
}

export { TodoContainer };
