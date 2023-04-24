import fs from 'fs';

const Products = [
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

//code for adding new product.
const newProduct = {
  id: 3,
  name: 'Product 3',
  price: 30,
  quantity: 15,
};
const data = fs.readFileSync('./data.json', 'utf-8');
const data1 = JSON.parse(data);
console.log(data1);
Products.push(newProduct);

fs.writeFile('./data.json', JSON.stringify(Products), (err) => {
  if (err) {
    console.log('Error in writing the file', err);
    return;
  }
  console.log('Write Successfully');
});
const updatedProducts = Products.filter((product) => product.id !== 1);
fs.writeFile('./data.json', JSON.stringify(updatedProducts), (err) => {
  if (err) {
    console.log('Error in writing the file', err);
    return;
  }
  console.log('Write Successfully');
});


//code for updating a product by matching the given ID
const updatedProduct = {
  id: 10,
  name: 'New Product 1',
  price: 15,
  quantity: 7,
};

const productIndex = Products.findIndex((product) => product.id === updatedProduct.id);

if (productIndex !== -1) {
  Products[productIndex] = updatedProduct;

  fs.writeFile('./data.json', JSON.stringify(Products), (err) => {
    if (err) {
      console.log('Error in writing the file', err);
      return;
    }
    console.log('Write Successfully');
  });
} else {
  console.log(`Product with ID ${updatedProduct.id} not found`);
}








