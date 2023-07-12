export const letterCount = (str) => {
  const arr = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ");
  let kelimeNesneleri = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = {};

    arr[i].split("").forEach((char) => {
      char in obj ? (obj[char] += 1) : (obj[char] = 1);
    });
    kelimeNesneleri.push(obj);
  }
  let maxFrequen = [];
  kelimeNesneleri.forEach((nesne) => {
    maxFrequen.push(Math.max(...Object.values(nesne)));
  });

  let maxValue = Math.max(...maxFrequen);

  console.log(maxValue);

  return maxValue < 2
    ? -1
    : arr[maxFrequen.indexOf(maxValue)]
    ? arr[maxFrequen.indexOf(maxValue)]
    : -1;
};
