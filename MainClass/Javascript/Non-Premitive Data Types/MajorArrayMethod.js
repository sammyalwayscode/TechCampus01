const storeItems = [
  { store: "Store A", item: "Laptop", price: 899.99 },
  { store: "Store B", item: "Smartphone", price: 499.99 },
  { store: "Store C", item: "Headphones", price: 199.99 },
  { store: "Store D", item: "Keyboard", price: 99.99 },
  { store: "Store E", item: "Monitor", price: 299.99 },
  { store: "Store A", item: "Mouse", price: 29.99 },
  { store: "Store B", item: "Printer", price: 149.99 },
  { store: "Store C", item: "Tablet", price: 399.99 },
  { store: "Store D", item: "Camera", price: 549.99 },
  { store: "Store E", item: "Smartwatch", price: 249.99 },
  { store: "Store A", item: "Speaker", price: 89.99 },
  { store: "Store B", item: "Router", price: 79.99 },
  { store: "Store C", item: "Microphone", price: 119.99 },
  { store: "Store D", item: "Charger", price: 19.99 },
  { store: "Store E", item: "External Hard Drive", price: 89.99 },
  { store: "Store A", item: "USB Drive", price: 14.99 },
  { store: "Store B", item: "Webcam", price: 49.99 },
  { store: "Store C", item: "Projector", price: 299.99 },
  { store: "Store D", item: "Game Console", price: 399.99 },
  { store: "Store E", item: "VR Headset", price: 599.99 },
];

// const filterPrice = storeItems[4].store;
const filterPrice = storeItems.filter((myElement) => {
  return myElement.price < 100;
});

const filterStore = storeItems.filter((items) => {
  return items.store === "Store A";
});

// console.log(filterPrice);
// console.log(filterStore);
// console.log(storeItems);

// The Map Method

const mapStoreValue = storeItems.map((bestElement) => {
  return bestElement.item;
});

console.log(mapStoreValue);

//The Find Method

const findItem = storeItems.find((myItems) => {
  //   console.log(myItems);
  return myItems.item === "Mouse";
});

// console.log(findItem);

//ForEachMethod

storeItems.forEach((myItem) => {
  console.log(myItem.item);
});
