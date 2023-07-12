export const offLineMinumum = (strArr) => {
  const [index, freqE] = E_Info(strArr);

  return strArr;
};

const E_Info = (strArr) => {
  let index = "";
  let freq_E = 0;
  for(let i =0;i<strArr.length;i++){
    if(strArr[i] === "E"){
        index = i
    }
  }
};
