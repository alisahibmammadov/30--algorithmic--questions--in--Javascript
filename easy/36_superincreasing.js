export const superIncreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let sum = sumOfSubsets(arr, i);
    console.log(arr[i] + "-" + sum);
    if (sum >= arr[i]) return false;
  }

  return true;
};

const sumOfSubsets = (arr, index) => {
  let sum = 0;
  for (let j = 0; j < index; j++) {
    sum += arr[j];
  }
  return sum;
};
