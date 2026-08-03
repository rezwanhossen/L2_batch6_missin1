//map,filter,sort,slice
const products = [
  {
    id: 1,
    pname: "Wireless Mouse",
    category: "electronic",
    price: 25,
    rating: 4.5,
    stock: 120,
  },
  {
    id: 2,
    pname: "Bluetooth Headphones",
    category: "electronic",
    price: 80,
    rating: 4.7,
    stock: 75,
  },
  {
    id: 3,
    pname: "Mechanical Keyboard",
    category: "electronic",
    price: 95,
    rating: 4.8,
    stock: 50,
  },
  {
    id: 4,
    pname: "Smart Watch",
    category: "electronic",
    price: 150,
    rating: 4.6,
    stock: 35,
  },
  {
    id: 5,
    pname: "Portable SSD",
    category: "electronic",
    price: 110,
    rating: 4.9,
    stock: 40,
  },
  {
    id: 6,
    pname: "Cotton T-Shirt",
    category: "cloth",
    price: 20,
    rating: 4.3,
    stock: 200,
  },
  {
    id: 7,
    pname: "Denim Jeans",
    category: "cloth",
    price: 45,
    rating: 4.5,
    stock: 90,
  },
  {
    id: 8,
    pname: "Hoodie",
    category: "cloth",
    price: 38,
    rating: 4.6,
    stock: 70,
  },
  {
    id: 9,
    pname: "Leather Jacket",
    category: "cloth",
    price: 120,
    rating: 4.8,
    stock: 25,
  },
  {
    id: 10,
    pname: "Running Shoes",
    category: "cloth",
    price: 85,
    rating: 4.7,
    stock: 60,
  },
  {
    id: 11,
    pname: "JavaScript Basics",
    category: "book",
    price: 30,
    rating: 4.4,
    stock: 100,
  },
  {
    id: 12,
    pname: "Python Programming",
    category: "book",
    price: 35,
    rating: 4.7,
    stock: 80,
  },
  {
    id: 13,
    pname: "Machine Learning",
    category: "book",
    price: 55,
    rating: 4.9,
    stock: 45,
  },
  {
    id: 14,
    pname: "Data Structures",
    category: "book",
    price: 40,
    rating: 4.6,
    stock: 65,
  },
  {
    id: 15,
    pname: "React in Action",
    category: "book",
    price: 48,
    rating: 4.8,
    stock: 55,
  },
];

const topThreeProduct = products
  .filter((item) => item.category === "electronic")
  .sort((a, b) => a.rating - b.rating)
  .slice(0, 3)
  .map((item) => {
    return { name: item.pname };
  });
console.log(topThreeProduct);

const names = ["rezwan", "alif", "jubaer", "santo"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
