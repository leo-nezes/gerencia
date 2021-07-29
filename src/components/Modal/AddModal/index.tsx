import { useRef } from 'react';
import { FiUserPlus } from 'react-icons/fi';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '../../Input';
import { Modal } from '../index';

import styles from './styles.module.scss';
import { useData } from '../../../hooks/data';

interface AddModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

interface CreateClientFormData {
  address: string;
  birthDate: string;
  cpf: string;
  name: string;
}

export function AddModal({ 
  isOpen,
  setIsOpen,
}: AddModalProps) {
  const formRef = useRef(null);
  const { register, handleSubmit } = useForm();
  const { addClient } = useData();

  const handleCreateClient: SubmitHandler<CreateClientFormData> = async (data) => {
    await addClient(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <form ref={formRef} onSubmit={handleSubmit(handleCreateClient)}>
        <h1
          className={styles.titleAddModal}
        >
          <FiUserPlus 
            size={30}
            className={styles.svgAddModal}
          />
          Novo Contato
        </h1>
        <Input 
          placeholder="Nome completo"
          { ...register("name") }
        />
        <Input 
          placeholder="CPF"
          { ...register("cpf") }
        />
        <Input 
          placeholder="Data de nascimento" 
          { ...register("birthDate") }
        />
        <Input 
          placeholder="Digite seu endereço completo"
          { ...register("address") }
        />
        
        <button 
          type="submit"
          className={styles.buttonAddModal} 
        >
          Adicionar novo contato
        </button>
      </form>
    </Modal>
  );
}
