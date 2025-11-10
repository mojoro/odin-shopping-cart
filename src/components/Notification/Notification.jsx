import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Notification.module.css";

export default function Notification({ message, isVisible, onHide }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onHide, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return createPortal(
    <div
      className={`${styles.notification} ${isVisible ? styles.visible : ""}`}
    >
      {message}
    </div>,
    document.body
  );
}
