import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import Modal from "./ui/Modal.jsx";
const ModalContext = createContext({
  openModal: () => {
    throw new Error("Function not implemented.");
  },
  closeModal: () => {
    throw new Error("Function not implemented.");
  },
});

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [Component, setComponent] = useState();

  const openModal = (Component) => {
    setComponent(Component);
  };

  const closeModal = () => {
    setComponent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal onClose={closeModal}>{Component}</Modal>
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = {
  children: PropTypes.node,
};

export default ModalProvider;
