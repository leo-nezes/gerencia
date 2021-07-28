import { Delete } from "./Delete";
import { Edit } from "./Edit";

import styles from'./buttons.module.scss';

export function Buttons() {
  return (
    <div className={styles.buttonsContainer}>
      <Edit />
      <Delete />
    </div>
  );
}