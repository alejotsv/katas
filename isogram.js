function isIsogram(str){
  let isogram = true;
  let lowerCase = str.toLowerCase()
  let arr = lowerCase.split("");
  arr.every((e,i) => {
    if (arr.indexOf(e,i+1)<0) {
       return true;
    } else {
      isogram = false;
      return false;
    }
  });
  return isogram;
}
