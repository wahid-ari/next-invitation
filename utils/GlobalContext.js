import { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(true);

  return <GlobalContext.Provider value={{ modalOpen, setModalOpen }}>{children}</GlobalContext.Provider>;
}
