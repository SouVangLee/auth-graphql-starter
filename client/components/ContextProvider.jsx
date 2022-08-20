import React, { createContext, useContext, useState } from 'react';

const initialState = {
  currentUser: null,
};

const PageContext = createContext(initialState);

export const PageContextProvider = ({children, pageAttributes}) => {
  const [state] = useState(pageAttributes);

  return <PageContext.Provider value={state}>{children}</PageContext.Provider>;
};

export const usePageAttributes = () => useContext(PageContext);