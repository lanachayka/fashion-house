import React, { useState } from "react";
import { CollectionItem } from "../pages/CollectionPage/collectionData";

type SelectedItems = {
  count: number;
  item: CollectionItem
}

type AppContextType = {
  count: number;
  setCount: (count: number) => void;
  selectedItems: SelectedItems[];
  setSelectedItems: (items: SelectedItems[]) => void;
};

export const AppContext = React.createContext({} as AppContextType);

type AppContextWrapperProps = {
  children: React.ReactNode;
};

export const AppContextWrapper: React.FC<AppContextWrapperProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<SelectedItems[]>([]);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        selectedItems,
        setSelectedItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
