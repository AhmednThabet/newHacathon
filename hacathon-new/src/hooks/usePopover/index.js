import { useState } from "react";

export const usePopover = () => {
  let [isShow, setIsShow] = useState(false);

  function handleToggle() {
    setIsShow((prev) => !prev);
  }

  return { isShow, handleToggle };
};
