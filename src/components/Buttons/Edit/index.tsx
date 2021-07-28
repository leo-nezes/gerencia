import { FiEdit } from 'react-icons/fi';

import styles from '../button.module.scss';

interface EditProps {
  toggleEditModal: () => void;
}

export function Edit({ toggleEditModal }: EditProps) {
  return (
    <button
      className={styles.buttonModal}
      onClick={toggleEditModal}
    >
      <FiEdit />
    </button>
  );
}