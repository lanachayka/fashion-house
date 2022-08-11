export type CollectionItem = {
    id: number;
    photo: string;
    price: number;
    currency: string;
    name: string;
    description: string;
    sizes: string;
}

export const collectionData: CollectionItem[] = [
  {
    id: 18,
    photo: "productCode18.png",
    price: 150,
    currency: "USD",
    name: "Knitted Midi Dress",
    description:
      "A knitted cotton dress with a pleated skirt in a milky color is perfect both for everyday looks and as an outfit for festive events.",
    sizes: "XS, S, M, L, XL",
  },
  {
    id: 19,
    photo: "productCode19.png",
    price: 120,
    currency: "USD",
    name: "Blazer Dress",
    description:
      "Are you ready to impress? Decorated with faux feathers at the hem, this blazer dress will make you the top star at any event!",
    sizes: "XS, S, M, L, XL",
  },
  {
    id: 21,
    photo: "productCode21.png",
    price: 40,
    currency: "USD",
    name: "Lace Top",
    description:
      "This top made of fine Italian lace is created for your stunning looks! Wear it with a blazer if you prefer business style, or with a delicate cardigan for a more romantic look.",
    sizes: "XS, S, M, L, XL",
  },
  {
    id: 20,
    photo: "productCode20.png",
    price: 80,
    currency: "USD",
    name: "White Blazer",
    description:
      "A stylish white blazer is what you need this spring! It is a part of our capsule collection that means you can easily mix it with other clothes by Jolly House. Wear it with a business-style shirt or silk top for two different looks.",
    sizes: "XS, S, M, L, XL",
  },
];