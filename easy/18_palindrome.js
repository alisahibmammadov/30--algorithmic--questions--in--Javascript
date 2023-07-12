export const isPalindrome = (str)=>{
    const newStr = str.replace(/ /g, "").toLowerCase();
    return newStr.split('').reverse().join('') === newStr ? true : false
}