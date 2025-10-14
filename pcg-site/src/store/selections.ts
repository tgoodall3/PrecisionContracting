import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type SelectionsContextValue = {
  selectedServices: string[];
  toggleService: (id: string) => void;
  setSelectedServices: (ids: string[]) => void;
  clearServices: () => void;
};

const SelectionsContext = createContext<SelectionsContextValue | undefined>(undefined);

type SelectionsProviderProps = {
  children: ReactNode;
};

export const SelectionsProvider = ({ children }: SelectionsProviderProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((service) => service !== id) : [...prev, id]
    );
  };

  const clearServices = () => setSelectedServices([]);

  const value = useMemo(
    () => ({
      selectedServices,
      toggleService,
      setSelectedServices,
      clearServices
    }),
    [selectedServices]
  );

  return React.createElement(SelectionsContext.Provider, { value }, children);
};

export const useSelections = (): SelectionsContextValue => {
  const context = useContext(SelectionsContext);
  if (!context) {
    throw new Error('useSelections must be used within a SelectionsProvider');
  }
  return context;
};
