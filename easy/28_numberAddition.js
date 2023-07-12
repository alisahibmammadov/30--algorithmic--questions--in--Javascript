export const numberAddition = (str) => {
  const strArr = str.split("");
  let numberArr = [];

  for (let i = 0; i < strArr.length; i++) {
    let lastI = numberArr.length - 1;
    if (/[^0-9]/.test(strArr[i])) {
      numberArr.push(strArr[i]);
    } else {
      if (numberArr.length === 0) {
        numberArr.push(strArr[i]);
      } else if (/[0-9]/.test(numberArr[lastI])) {
        numberArr[lastI] = numberArr[lastI] + strArr[i];
      } else if (/[^0-9]/.test(numberArr[lastI])) {
        numberArr.push(strArr[i]);
      }
    }
  }

  return calculateSum(numberArr);
};

const calculateSum = (arr) => {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].match(/\d+/)) {
      sum += parseInt(arr[j]);
    }
  }

  return sum 
};
