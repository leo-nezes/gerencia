import { useState } from "react";
import { Header } from "../components/Header";
import { AddModal } from "../components/Modal/AddModal";
import { Table } from "../components/Table";

import styles from './admin.module.scss';

export function Admin() {
  const [ openModal, setOpenModal ] = useState(false);

  function toggleModal() {
    setOpenModal(!openModal);
  };
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <Table toggleModal={toggleModal} />

        <AddModal 
          isOpen={openModal}
          setIsOpen={toggleModal}
        />
      </main>
    </div>
  );
}