// Single loop approach

function divisibleSumPairs(arrLength, k, arr) {
  let count = 0;
  let focus = arr.shift();
  arr.reduce((target, item) => (focus + item) % k === 0 && count++, 0);

  return !arr.length ? count : count + divisibleSumPairs(arrLength, k, arr);
}

// nested loops approach

// function divisibleSumPairs(arrLength, k, arr) {
//   let count = 0;
//   for (let i = 0; i < arrLength; i++) {
//     for (let j = 0; j < arrLength; j++) {
//       if (arr[i] < arr[j] && (arr[i] + arr[j]) % k === 0) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

const res = divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
console.log(res);
