import styles from "./MainForm.module.css";
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
      <Modal isOpen={modal} onRequestClose={closeModal}>
        <h2>모달 테스트</h2>
        <p>모달 테스트 성공??</p>
        <button onClick={closeModal}>x</button>
      </Modal>
      <button>삭제</button>
    </div>
  );
};

export default AddContainer;
