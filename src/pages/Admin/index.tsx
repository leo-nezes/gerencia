import { useState } from "react";

import { Header } from "../../components/Header";
import { AddModal } from "../../components/Modal/AddModal";
import { EditModal } from "../../components/Modal/EditModal";
import { Table } from "../../components/Table";

import styles from './styles.module.scss';

export function Admin() {
  const [ openModal, setOpenModal ] = useState(false);
  const [ openEditModal, setOpenEditModal ] = useState(false);

  function toggleModal() {
    setOpenModal(!openModal);
  };

  function toggleEditModal() {
    setOpenEditModal(!openEditModal);
  };

  return (
    <div>
      <Header />

      <main
        className={styles.container}
      >
        <Table
          toggleModal={toggleModal}
          toggleEditModal={toggleEditModal}
        />

        <AddModal
          isOpen={openModal}
          setIsOpen={toggleModal}
        />
        <EditModal
          isOpen={openEditModal}
          setIsOpen={toggleEditModal}
        />
      </main>
    </div>
  );
}