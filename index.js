function countOrderItems() {

  //prompt user for input
  const order = prompt(`Enter your order, please enter commas`)
  //commas separate values and create the array
  const items = order.split(`,`);
  // empty object to hold the count
  const itemCounts = {};
  //create object using for and if
  for (let i = 0; i < items.length; i++) {
    const item = items[i].trim();

    if (itemCounts[item]) {
      itemCounts[item]++;
    } else {
      itemCounts[item] = 1;
    }
  }

  return itemCounts;
}

const orderCounts = countOrderItems();
console.log(orderCounts);
