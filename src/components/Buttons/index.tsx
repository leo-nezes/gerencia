import { Delete } from "./Delete";
import { Edit } from "./Edit";

import styles from'./styles.module.scss';

interface ButtonsProps {
  toggleEditModal: () => void;
  clientId: string;
}

export function Buttons({ toggleEditModal, clientId }: ButtonsProps) {
  return (
    <div className={styles.buttonsContainer}>
      <Edit 
        toggleEditModal={toggleEditModal}
      />
      <Delete 
        clientId={clientId}
      />
    </div>
  );
}