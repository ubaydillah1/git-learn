// const inventory = {
//   apple: { stock: 10, price: 5000 },
//   banana: { stock: 3, price: 3000 },
//   orange: { stock: 8, price: 4000 },
//   mango: { stock: 2, price: 7000 },
// };

// const inventoryEntries = Object.entries(inventory);

// console.log(inventoryEntries);

// function calculateProducts(inventory) {
//   const result = {
//     availableProducts: [],
//     totalValue: 0,
//     mostExpensive: null,
//   };

//   let mostExpensiveNominal = 0;

//   Object.entries(inventory).forEach(([fruit, data]) => {
//     const { stock, price } = data;

//     if (stock >= 5) {
//       result.availableProducts.push(fruit);
//     }

//     result.totalValue += stock * price;

//     if (price > mostExpensiveNominal) {
//       mostExpensiveNominal = price;
//       result.mostExpensive = fruit;
//     }
//   });

//   return result;
// }

// console.log(calculateProducts(inventory));

// const array = [1, 2, 3, 4];

// function sortFromBigger(arr) {
//   let again = false;

//   do {
//     again = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         again = true;
//       }
//     }
//   } while (again);

//   return arr;
// }

// console.log(sortFromBigger(array));

function generatePermutations(str) {
  if (str.length === 1) {
    return [str];
  }

  const results = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingStr = str.slice(0, i) + str.slice(i + 1);

    const subPermutations = generatePermutations(remainingStr);

    for (const perm of subPermutations) {
      results.push(char + perm);
    }
  }

  return results;
}

const word = "ABC";
const allPermutations = generatePermutations(word);

console.log(allPermutations);
