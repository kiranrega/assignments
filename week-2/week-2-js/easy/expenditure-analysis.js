/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


// function calculateTotalSpentByCategory(transactions) {
//   let re = []
//   elementTr = {}
//   transactions.forEach((el) => {
//     let category = el.category
//     if (elementTr[category]) {
//       re.push({category: el.category, totalSpent: el.price + elementTr["total"]})
//     } else {
//       elementTr[category] = true
//       elementTr.total = el.price
//     }
//   })
//   return re;
// }

function calculateTotalSpentByCategory(transactions) {
  let trackerMap = new Map()
  let category;
  transactions.forEach((transaction) => {
    category =  transaction.category
      if (trackerMap.has(category)) {
        trackerMap.set(category, trackerMap.get(category) + transaction.price )
      } else {
        trackerMap.set(category, transaction.price)
      }
  })
  let res = []
  for (let i = 0; i< trackerMap.size; i++) {
    res.push({category, totalSpent: trackerMap.get(category)})
  }
  return res
}


module.exports = calculateTotalSpentByCategory;
