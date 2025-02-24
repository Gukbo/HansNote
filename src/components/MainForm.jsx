import styles from "./MainForm.module.css";

export default function MainForm() {
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
      </div>
    </div>
  );
}
