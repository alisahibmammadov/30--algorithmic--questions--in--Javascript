export const additivePersistence = (num) => {
  if (num < 10) return 0;
  let sumOfDigits = sum(num);
  let additivePersistence = 1;
  while (sumOfDigits > 9) {
    // console.log(sumOfDigits);
    additivePersistence++;
    sumOfDigits = sum(sumOfDigits);
  }

  //   return "additivePersistence:" + additivePersistence + "-" + "sumOfDigits " + sumOfDigits;
  return additivePersistence;
};

const sum = (n) => {
  let sum = 0;
  const arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
};
