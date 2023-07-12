export const logestWord = (sen) => {
    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")
    arr.sort((a,b)=>{return b.length - a.length})
    return arr
}

/* 
 Longest 
 Word

  - Using the JavaScript language, have the function LongestWord(sen) 
  take the sen parameter being passed and return the largest word in the string.
  
  - If there are two or more words that are the same length, return the 
  firt word from the string with that length.

  - Ignore punctuation and assume sen will not be empty

*/