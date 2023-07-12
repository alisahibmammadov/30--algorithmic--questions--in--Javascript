export const multiplativePersistance = (num) => {
  if (num < 9) return 0;
  let result = multiply(num);
    let multiplativePersistance = 1
  while(result > 9){
    multiplativePersistance++
    result = multiply(result)
  }

  return multiplativePersistance;
};

const multiply = (num) => {
  const numArr = num.toString().split("");
  let multiply = 1;
  for (let i = 0; i < numArr.length; i++) {
    multiply *= numArr[i];
  }
  return multiply;
};
