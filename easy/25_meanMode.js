export const meanMode = (arr) => {
  const mean = calculateMean(arr);

  const mode = calculateMode(arr);

  return mean === mode ? 1 : 0;
};

const calculateMean = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
};

const calculateMode = (arr) => {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in freq) {
      freq[arr[i]] = freq[arr[i]] + 1;
    } else {
      freq[arr[i]] = 1;
    }
  }
  const max = Math.max(...Object.values(freq))
  return iterateOverObj(freq,max);
};

const iterateOverObj =(freq,max)=>{
    for( const j in freq){
        if(freq[j] === max){
            return parseInt(j)
        }
    }
}