import Product from "@/app/model/product";

export default [
  new Product({
    id: 1,
    title: 'iPhone X',
    amount: 1,
    price: 1000,
    description: 'Think different',
  }),
  new Product({
    id: 2,
    title: 'Google Pixel',
    amount: 100,
    price: 500,
    description: 'Google phone',
  }),
];