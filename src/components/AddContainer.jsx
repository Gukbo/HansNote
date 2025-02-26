import styles from "./Modal.module.css";
import { useState } from "react";
import Modal from "react-modal";

const AddContainer = () => {
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
          <h2>모달 테스트</h2>
          <p>모달 테스트 성공??</p>
          <button onClick={closeModal}>x</button>
        </div>
      </Modal>
      <button>삭제</button>
    </div>
  );
};

export default AddContainer;
