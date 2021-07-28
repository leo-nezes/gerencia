import { useRef } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { Input } from '../../Input';

import Modal from '../index';

import styles from './styles.module.scss';

interface AddModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export function AddModal({ 
  isOpen,
  setIsOpen,
}: AddModalProps) {
  const formRef = useRef(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form ref={formRef}>
        <h1
          className={styles.titleModal}
        >
          <FiUserPlus 
            size={30}
            className={styles.svgModal}
          />
          Novo Contato
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
          className={styles.buttonModal} 
        >
          Adicionar novo contato
        </button>
      </form>
    </Modal>
  );
}
