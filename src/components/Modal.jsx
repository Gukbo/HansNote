import styles from "./Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.ModalWrapper}>
      <div className={styles.ModalContainer}>
        <h1>일정 추가</h1>
        <p>일정 이름</p>
        <span>data</span>
      </div>
    </div>
  );
}
