export const simpleSymbols = (str) => {
  const arr = str.split("");
  let controlArr = [];

  arr.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      if (
        arr[arr.indexOf(char) - 1] === "+" &&
        arr[arr.indexOf(char) + 1] === "+"
      ) {
        controlArr.push(1);
      } else {
        controlArr.push(0);
      }
    }
  });
  console.log(controlArr);
  if(controlArr.includes(0)){
    return false
  }else{
    return true
  }
};
