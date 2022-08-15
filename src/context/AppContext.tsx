import React, { useEffect, useState } from "react";
import { CollectionItem } from "../pages/CollectionPage/collectionData";

type SelectedItems = {
  count: number;
  item: CollectionItem;
};

type AppContextType = {
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
    for (const key in selectedItems) {
      totalPrice += selectedItems[key].count * selectedItems[key].item.price;
    }
    setTotal(totalPrice);
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
