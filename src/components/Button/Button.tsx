import { ReactNode } from "react";
import { IconType } from "react-icons";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "Primary" | "Secondary";
  icon: IconType;
}

const Button = ({ children, onClick, color = "Primary", icon }: Props) => {
  const IconComponent = icon;

  return (
    <button
      className={[styles.btn, styles["btn" + color]].join(" ")}
      onClick={onClick}
      type="button"
    >
      <IconComponent style={{ marginRight: "10px" }} />
      {children}
    </button>
  );
};

export default Button;
