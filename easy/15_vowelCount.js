export const vowelCount = (str) => {
  // const arr =str.split("")
  let i = 0;
  [...str].forEach((letter) => {
    if (/[a/e/i/o/u/A/E/I/O/U]/.test(letter)) {
      i = i + 1;
    }
  });
  return i 
};
