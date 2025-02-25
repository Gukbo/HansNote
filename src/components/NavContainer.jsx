import styles from "../components/MainForm.module.css";

const NavContainer = () => {
  return (
    <div className={styles.NavContainer}>
      <div className={styles.LogoContainer}>Hans Note</div>
      <div className={styles.btnContainer}>
        <button>darkmode</button>
      </div>
    </div>
  );
};

export default NavContainer;
