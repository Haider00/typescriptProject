import fs from 'fs';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 5,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    quantity: 10,
  },
];

// code for adding new product
const newProduct: Product = {
  id: 3,
  name: 'Product 3',
  price: 30,
  quantity: 15,
};
const data: string = fs.readFileSync('./data.json', 'utf-8');
const data1: Product[] = JSON.parse(data);
console.log(data1);
Products.push(newProduct);

fs.writeFile('./data.json', JSON.stringify(Products), (err: NodeJS.ErrnoException | null) => {
  if (err) {
    console.log('Error in writing the file', err);
    return;
  }
  console.log('Write Successfully');
});

// code for deleting the product
const updatedProducts: Product[] = Products.filter((product: Product) => product.id !== 1);
fs.writeFile('./data.json', JSON.stringify(updatedProducts), (err: NodeJS.ErrnoException | null) => {
  if (err) {
    console.log('Error in writing the file', err);
    return;
  }
  console.log('Write Successfully');
});

// code for updating a product by matching the given ID
const updatedProduct: Product = {
  id: 10,
  name: 'New Product 1',
  price: 15,
  quantity: 7,
};

const productIndex: number = Products.findIndex((product: Product) => product.id === updatedProduct.id);

if (productIndex !== -1) {
  Products[productIndex] = updatedProduct;

  fs.writeFile('./data.json', JSON.stringify(Products), (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.log('Error in writing the file', err);
      return;
    }
    console.log('Write Successfully');
  });
} else {
  console.log(`Product with ID ${updatedProduct.id} not found`);
}








