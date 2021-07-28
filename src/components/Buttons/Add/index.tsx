import { FiPlusCircle } from "react-icons/fi";

import styles from './styles.module.scss';

interface AddProps {
  toggleModal: () => void;
}

export function Add({ toggleModal }: AddProps) {
  return (
    <button
      className={styles.addButton}
      onClick={toggleModal}
    >
      <FiPlusCircle /> Novo cliente
    </button>
  );
}