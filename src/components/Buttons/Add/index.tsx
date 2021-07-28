import { FiPlusCircle } from "react-icons/fi";

import styles from './styles.module.scss';

export function Add() {
  function teste() {
    console.log('Funcionou!!!!!!!!');
  }

  return (
    <button
      className={styles.addButton}
      onClick={teste}
    >
      <FiPlusCircle /> Novo contato
    </button>
  );
}