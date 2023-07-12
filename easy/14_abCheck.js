export const abCheck = (str) => {
//   const arr = str.toLowerCase().split("");
//   let control = [];
//   arr.forEach((char) => {
//     if (char === "a" && arr[arr.indexOf(char) + 4] === "b") {
//       control.push(true);
//     }
//   });
//   return control.includes(true) ? true : false;


    return str.search("a...b") > -1 ? true : false
};
