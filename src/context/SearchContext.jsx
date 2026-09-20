import { createContext, useState, useContext } from "react";


const searchContext = createContext(null);

export function SearchProvider({children}) {
   const [search, setSearch] = useState("")

   return (
    <searchContext.Provider value={{search, setSearch}}>
      {children}
    </searchContext.Provider>
  );
}


export function useSearch() {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error("useSearch must be used inside a Search");
  }
  return context;
}