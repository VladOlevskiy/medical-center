"use client";

import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
