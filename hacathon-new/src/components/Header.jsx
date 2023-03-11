import React from "react";
import useModal from "../hooks/useModal";
import { PlusIconMini } from "../lib/@heroicons";
import AddPost from "./AddPost";

import Modal from "./modal/Modal";
export const Header = () => {
  const { isOpen, closeModal, openModal } = useModal();
  return (
    <div className="flex justify-between mb-3">
      <span className=" text-2xl font-semibold">List of post </span>
      <Modal
        iconModal={<PlusIconMini />}
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        secondButtonText="Add"
      >
        <AddPost closeModal={closeModal} />
      </Modal>
    </div>
  );
};
export default Header;
