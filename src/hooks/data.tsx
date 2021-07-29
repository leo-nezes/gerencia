import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import api from "../services/api";

export interface Data {
  name: string;
  cpf: string;
  birth_date: string;
  address: string;
}

interface DataContextData {
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

      console.log(response.data);
    }

    loadData();
  }, []);

  function addClient() {}
  function editClient() {}
  function removeClient() {}


  return (
    <DataContext.Provider value={{ addClient, editClient, removeClient }}>
      {children}
    </DataContext.Provider>
  );
};

export function useData(): DataContextData {
  const context = useContext(DataContext);

  return context;
}
