import DataTable, { createTheme, TableColumn } from 'react-data-table-component';
import { useData } from '../../hooks/data';
import { Buttons } from '../Buttons';
import { Add } from '../Buttons/Add';

interface TableProps {
  toggleModal: () => void;
  toggleEditModal: () => void;
}

export function Table({ 
  toggleModal, 
  toggleEditModal }: TableProps
) {
  const { data: clientsData } = useData();


  const data = [...clientsData];
  const columns: TableColumn[] = [
    {
      name: 'Nome',
      selector: 'name',
    },
    {
      name: 'CPF',
      selector: 'cpf'
    },
    {
      name: 'Nascimento',
      selector: 'birthDate'
    },
    {
      name: 'Endereço',
      selector: 'address'
    },
    {
      name: 'Ações',
      selector: 'actions',
      cell: ({ id }) => <Buttons toggleEditModal={toggleEditModal} clientId={id} />
    }
  ];
  const customStyles = {
    table: {
      style: {
        borderRadius: '25px',
      }
    },
    subHeader: {
      style: {
        padding: '0 3rem',
      },
    },
    rows: {
      style: {
        minHeight: '72px',
      }
    },
    headCells: {
      style: {
        font: "600 1rem Roboto, sans-serif",
        fontWeight: 500,
        color: "#4B4D63",
        fontSize: "1.5rem",
      },
    },
    cells: {
      style: {
        font: "400 1rem Roboto, sans-serif",
      },
    },
  };
  createTheme('dark', {
    text: {
      primary: '#EEEEF2',
      secondary: '#D1D2DC',
    },
    background: {
      default: '#1F2029',
    },
      divider: {
      default: '#616480',
    },
  });

  return(
    <section>
      <DataTable 
        columns={columns}
        data={data}
        theme="dark"
        customStyles={customStyles}
        subHeader
        subHeaderComponent={<Add toggleModal={toggleModal} />}
      />
    </section>
  );
}