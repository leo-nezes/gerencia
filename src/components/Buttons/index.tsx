import { Delete } from "./Delete";
import { Edit } from "./Edit";

import styles from'./styles.module.scss';

interface ButtonsProps {
  toggleEditModal: () => void;
}

export function Buttons({ toggleEditModal }: ButtonsProps) {
  return (
    <div className={styles.buttonsContainer}>
      <Edit 
        toggleEditModal={toggleEditModal}
      />
      <Delete />
    </div>
  );
}