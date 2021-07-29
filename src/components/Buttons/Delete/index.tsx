import { FiMinusCircle } from "react-icons/fi";
import { useData } from "../../../hooks/data";

import styles from '../button.module.scss';

interface DeleteProps {
  clientId: string;
}

export function Delete({ clientId }: DeleteProps) {
  const { removeClient } = useData();
  
  async function handleDeleteClient(clientId: string) {
    await removeClient(clientId);
  }
  
  return (
    <button
      className={styles.buttonModal}
      onClick={() => handleDeleteClient(clientId)}
    >
      <FiMinusCircle />
    </button>
  );
}