import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import api from "../services/api";

export interface Data {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  address: string;
}

interface DataContextData {
  data: Data[];
  addClient: (data: Omit<Data, 'id'>) => void
  editClient: () => void
  removeClient: (clientId: string) => void
}

interface DataProviderPops {
  children: ReactNode;
}

const DataContext = createContext<DataContextData>({} as DataContextData);

export function DataProvider({ children }: DataProviderPops) {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('clients/list');

      const clients = [...response.data];

      setData([...clients]);
    }

    loadData();
  }, []);

  async function addClient({ name, cpf, birthDate, address }: Omit<Data, 'id'>) {
    const response = await api.post('clients/', { 
      name,
      cpf,
      birthDate,
      address 
    });

    const newData = [...data, response.data];

    setData(newData);
  }

  function editClient() {}

  async function removeClient(clientId: string) {
    await api.delete(`delete/${clientId}`);

    const newClients = data.filter(client => client.id !== Number(clientId));

    setData([ ...newClients ]);
  }

  return (
    <DataContext.Provider value={{ data, addClient, editClient, removeClient }}>
      {children}
    </DataContext.Provider>
  );
};

export function useData(): DataContextData {
  const context = useContext(DataContext);

  return context;
}
