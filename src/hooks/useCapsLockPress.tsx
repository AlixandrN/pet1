import { useEffect, useState } from "react";

export const useCapsLockPress = (): boolean => {
  const [isCapsLockPressed, setIsCapsLockPressed] = useState(false);

  const capsLockHandler = (e: KeyboardEvent) => {
    if (typeof e.getModifierState === "function") {
      e.getModifierState("CapsLock")
        ? setIsCapsLockPressed(true)
        : setIsCapsLockPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", capsLockHandler);
    window.addEventListener("keyup", capsLockHandler);

    return () => {
      window.removeEventListener("keydown", capsLockHandler);
      window.removeEventListener("keyup", capsLockHandler);
    };
  }, [capsLockHandler]);

  return isCapsLockPressed;
};
