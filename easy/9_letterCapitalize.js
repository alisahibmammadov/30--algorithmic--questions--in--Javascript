export const letterCapitalize = (str) => {
  let newStr = [];
  str.split(" ").forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
  });
  return newStr.join(" ");
};
