import {
  PencilSquareIconMini,
  TrashIconMini,
  EllipsisHorizontalMini,
} from "../lib/@heroicons";

import Modal from "./modal/Modal";
import useModal from "../hooks/useModal";
import { usePopover } from "../hooks/usePopover";

export default function MyPopover() {
  const { isShow, handleToggle } = usePopover();
  const {
    isOpen: isOpen1,
    closeModal: closeModal1,
    openModal: openModal1,
  } = useModal();
  // const {
  //   isOpen: isOpen2,
  //   closeModal: closeModal2,
  //   openModal: openModal2,
  // } = useModal();

  return (
    <div className="w-full max-w-sm px-4 relative">
      <span
        className="h-5 w-5 block  cursor-pointer mt-2 text-blue-700"
        onClick={handleToggle}
      >
        <EllipsisHorizontalMini />
      </span>
      {isShow ? (
        <div className=" border border-gray-300 rounded-md bg-white z-10  flex flex-col gap-1 absolute top-5 right-5">
          <span className="flex gap-2 items-center  cursor-pointer hover:bg-gray-200 py-1 px-3  transition-all">
            <Modal
              iconModal={<PencilSquareIconMini />}
              titleModal="Edit"
              isOpen={isOpen1}
              closeModal={closeModal1}
              openModal={openModal1}
              iconModalClass="h-4 w-4"
              buttonModalClass="gap-2  hover:bg-gray-200 py-1 px-3 !bg-transparent !text-blue-700"
            />
          </span>
          <span className="flex gap-2 items-center  cursor-pointer hover:bg-gray-200 py-1 px-3  transition-all">
            <button
              type="button"
              className="inline-flex text-blue-700 items-center rounded-full p-1 hover:bg-gray-light px-3  transition-all"
            >
              <span className=" flex gap-2">
                <span className="h-6 w-6">
                  <TrashIconMini />
                </span>
                Delete
              </span>
            </button>
            {/* <Modal
              iconModal={<TrashIconMini />}
              titleModal="Delete"
              isOpen={isOpen1}
              closeModal={closeModal1}
              openModal={openModal1}
              iconModalClass="h-4 w-4"
              buttonModalClass="gap-2  hover:bg-gray-200 py-1 px-3 !bg-transparent !text-blue-700"
            /> */}
          </span>
        </div>
      ) : null}
    </div>
  );
}
