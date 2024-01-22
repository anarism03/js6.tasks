function calculateSum(arr) {
  // Find the smallest and largest values
  let smallest = Infinity;
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] < smallest) {
          smallest = arr[i];
      }
      if (arr[i] > largest) {
          largest = arr[i];
      }
  }

  // Calculate the sum, excluding the smallest and largest values
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== smallest && arr[i] !== largest) {
          sum += arr[i];
      }
  }

  return sum;
}

// Test with the example input
const inputArray = [6, 2, 7, 1, 7, 1, 2];
const result = calculateSum(inputArray);

// Print the result
console.log(result);
