export const firstFactorial = (num) => {
  let factorial = 1
    for(let i = 2 ; i<=num;i++){
        factorial *= i
    }
    return factorial
};
