import { useEffect } from "react";

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current.contains(event.target) || !event.target.closest('.cards-container__card')) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
