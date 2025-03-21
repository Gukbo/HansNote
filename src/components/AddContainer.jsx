import styles from "./Modal.module.css";
import { useState } from "react";
import Modal from "react-modal";

function AddContainer() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={styles.AddContainer}>
      <button onClick={openModal}>추가</button>
      <Modal
        className={styles.modalWrapper}
        isOpen={modal}
        onRequestClose={closeModal}
        style={{
          overlay: {
            position: "fixed",
            inset: "0 0 0 0",
            zIndex: 1000,
            backgroundColor: "rgba(26, 26, 26, 0.75)",
            backdropFilter: `blur(2px)`,
          },
          content: {
            width: "800px",
            top: "50%",
            left: "35%",
            padding: 0,
            transform: "translateY(-50%)",
            position: "relative",
          },
        }}
      >
        <div className={styles.modalContent}>
          <h2>할일 추가</h2>
          <p>해야 할 일을 추가하세요.</p>
          <input
            type="text"
            placeholder="할 일 추가"
            onChange={(e) => e.target.value()}
          />
          <div>
            <button onClick={closeModal}>추가</button>
            <button onClick={closeModal}>취소</button>
          </div>
        </div>
      </Modal>
      <button>삭제</button>
    </div>
  );
}

export { AddContainer };
