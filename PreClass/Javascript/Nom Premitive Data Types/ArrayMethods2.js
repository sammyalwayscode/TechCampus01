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

// Filter Method

const filteredItem = storeItems.filter((items) => {
  return items.store === "Store E";
});

const filterPrice = storeItems.filter((myPrice) => {
  return myPrice.price <= 100;
});

// console.log(filterPrice);

// Map Methods
const mapedItems = storeItems.map((myItem) => {
  return myItem.item;
});
const mapedItemsFirstLetter = storeItems.map((myItem) => {
  return myItem.item[0].toLowerCase();
});

// console.log(mapedItems);

// Find Method

const foundItem = storeItems.find((findItem) => {
  return findItem.item === "Mouse";
});
const foundItemIndex = storeItems.find((findItem, index, array) => {
  const my = findItem.item === "Mouse";
  //   console.log(
  //     `Found the ${my} which is in the index position of ${index} in the array ${array}`
  //   );
});

// console.log(foundItem);

// For Each

storeItems.forEach((items) => {
  //   console.log(items.item);
});

// Some

const inExpensiveItem = storeItems.some((items, i) => {
  //   console.log(i);
  return items.price <= 99;
});

// console.log(inExpensiveItem);

const generalPricedItem = storeItems.every((item) => {
  return item.price <= 100;
});

// console.log(generalPricedItem);

const generalTotal = storeItems.reduce((currentTotal, items) => {
  return items.price + currentTotal;
}, 0);

console.log("The general", generalTotal);
