import React, { useEffect, useState } from "react";
import { CollectionItem } from "../pages/CollectionPage/collectionData";

export type SelectedItems = {
  count: number;
  item: CollectionItem;
};

export type AppContextType = {
  count: number;
  setCount: (count: number) => void;
  selectedItems: SelectedItems[];
  setSelectedItems: (items: SelectedItems[]) => void;
  total: number;
  setTotal: (total: number) => void;
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
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let totalPrice = 0;
    let updatedCount = 0;
    selectedItems.forEach((item) => {
      totalPrice += item.count * item.item.price;
      updatedCount += item.count;
    });
    setTotal(totalPrice);
    setCount(updatedCount);
  }, [selectedItems]);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        selectedItems,
        setSelectedItems,
        total,
        setTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
