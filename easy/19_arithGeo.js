export const arithGeo = (arr) => {
  let diff = arr[1] - arr[0];
  let ratio = arr[1] / arr[0];
  let isArithmetic = true;
  let isGeometric = true;

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != diff) {
      isArithmetic = false;
    }
    if (arr[i] / arr[i - 1] != ratio) {
      isGeometric = false;
    }
  }
  if (isArithmetic === true) {
    return "Arithmetic";
  } else if (isGeometric === true) {
    return "Geometric";
  } else {
    return -1;
  }
};
