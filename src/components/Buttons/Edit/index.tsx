import { FiEdit } from 'react-icons/fi';

import '../button.module.scss';

interface EditProps {
  toggleEditModal: () => void;
}

export function Edit({ toggleEditModal }: EditProps) {
  return (
    <button
      onClick={toggleEditModal}
    >
      <FiEdit />
    </button>
  );
}