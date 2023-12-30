/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you"ve implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactions = [
  {
    itemName: "Laptop",
    category: "Electronics",
    price: 1200,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Running Shoes",
    category: "Footwear",
    price: 80,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Headphones",
    category: "Electronics",
    price: 50,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Backpack",
    category: "Fashion",
    price: 40,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Smartphone",
    category: "Electronics",
    price: 800,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Book",
    category: "Books",
    price: 15,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "T-shirt",
    category: "Fashion",
    price: 25,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Watch",
    category: "Accessories",
    price: 100,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Sunglasses",
    category: "Accessories",
    price: 35,
    timestamp: new Date().toISOString(),
  },
  {
    itemName: "Desk Chair",
    category: "Furniture",
    price: 150,
    timestamp: new Date().toISOString(),
  }
]

function calculateTotalSpentByCategory(transactions) {
  var categoryAndSpends = new Map();

  for (var i = 0; i < transactions.length; i++){

    const category = transactions[i].category; 
    const price = transactions[i].price; 

    if(!categoryAndSpends.has(category)){ 
        categoryAndSpends.set(category, price); 
    } else {
      categoryAndSpends.set(category, categoryAndSpends.get(category) + price); 
    }
  }
  
  console.log(categoryAndSpends); 
}

calculateTotalSpentByCategory(transactions); 
