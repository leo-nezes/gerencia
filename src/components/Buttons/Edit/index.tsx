import { FiEdit } from 'react-icons/fi';

import '../button.module.scss';

export function Edit() {
  function teste() {
    console.log('Funcionou!!!!!!!!');
  }
  
  return (
    <button
      onClick={teste}
    >
      <FiEdit />
    </button>
  );
}