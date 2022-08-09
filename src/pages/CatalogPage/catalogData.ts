export type CatalogItem = {
    id: number;
    img: string;
    title: string;
    text: string;
}

export const catalogData: CatalogItem[] = [
  {
    id: 0,
    img: "accessories.png",
    title: "Accessories",
    text: "Belts, rings, gloves, necklaces and more for the finishing touch to your look.",
  },
  {
    id: 1,
    img: "shirt.png",
    title: "Shirt & Tops",
    text: "Light tops and shirts made from natural materials such as linen, silk, and others.",
  },
  {
    id: 2,
    img: "dresses.png",
    title: "Dresses",
    text: "Casual and evening dresses in mini and midi length for your amazing looks.",
  },
  {
    id: 3,
    img: "pants.png",
    title: "Pants",
    text: "Pants made from natural fabrics and our own collection of jeans that will last you for years.",
  },
];