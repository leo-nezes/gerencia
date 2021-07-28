import { FiMinusCircle } from "react-icons/fi";

import styles from '../button.module.scss';

export function Delete() {
  return (
    <button
      className={styles.buttonModal}
    >
      <FiMinusCircle />
    </button>
  );
}