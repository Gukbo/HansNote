import { useState } from "react";
import styles from "./MainForm.module.css";
import Modal from "./Modal";

export default function MainForm() {
  const [modal, setModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.MainForm}>
        <div className={styles.NavContainer}>
          <div className={styles.LogoContainer}>Hans Note</div>
          <div className={styles.btnContainer}>
            <button>darkmode</button>
          </div>
        </div>
        <div className={styles.MainContainer}>내용이 들어갈 곳</div>
        <div className={styles.AddContainer}>
          <button onClick={setModal(true)}>추가</button>
          {modal === true ? <Modal /> : null}
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
}
