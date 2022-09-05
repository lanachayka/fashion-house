import { SelectedItems } from "../../context/AppContext";
import { CollectionItem } from "../../pages/CollectionPage/collectionData";

export const findItemById = (items: SelectedItems[], item: CollectionItem) => {
  const copyItems = [...items];
  const alreadyInCartIndex = copyItems.findIndex((i) => i.item.id === item.id);
  if (alreadyInCartIndex >= 0) {
    copyItems[alreadyInCartIndex].count += 1;
  } else {
    copyItems.push({
      count: 1,
      item: item,
    });
  }
  return copyItems;
};
