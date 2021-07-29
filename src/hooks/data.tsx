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
  addClient: () => void
  editClient: () => void
  removeClient: () => void
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

  function addClient() {}
  function editClient() {}
  function removeClient() {}


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
