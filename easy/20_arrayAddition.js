export const arrayAddition = (arr) => {
  // 1ci yol
  // const newArr = [...arr]
  // let sum = 0
  // const maxValue = Math.max(...arr)
  // newArr.splice(arr.indexOf(maxValue),1)
  // for(let i =0;i<newArr.length;i++){
  //     sum = sum + newArr[i]
  // }
  // return maxValue === sum ?  true : false
  // 2ci yol
  //   arr.sort((a, b) => a - b);
  //   let sum = 0;
  //   const maxValue = arr[arr.length - 1];
  //   for(let i =0;i<arr.length - 1;i++){
  //     sum = sum + arr[i]
  //   }
  //   return maxValue === sum ? true : false
  // 3cu yol
  const maxValue = Math.max(...arr);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / 2 === maxValue ? true : false
};
