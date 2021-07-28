import { useRef } from "react";
import { FiUsers } from "react-icons/fi";

import { Modal } from "../index";
import { Input } from "../../Input";

import styles from './styles.module.scss';

interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export function EditModal({
  isOpen,
  setIsOpen,
}: ModalEditFoodProps) {
  const formRef = useRef(null);

  return(
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form ref={formRef}>
        <h1
          className={styles.titleEditModal}
        >
          <FiUsers 
            size={30}
            className={styles.svgEditModal}
          />
          Editar Informações
        </h1>
        <Input 
          name="name" 
          placeholder="Nome completo"
        />
        <Input 
          name="cpf"
          placeholder="CPF"
        />
        <Input 
          name="birth_date"
          placeholder="Data de nascimento" 
        />
        <Input 
          name="address"
          placeholder="Digite seu endereço completo"
        />
        
        <button 
          type="submit"
          className={styles.buttonEditModal} 
        >
          Editar contato
        </button>
      </form>
    </Modal>
  );
}