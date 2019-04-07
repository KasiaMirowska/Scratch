('use strict');
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}
console.log(factorialize(5));

function findLongestWordLength(str) {
  const strArr = str.split(' ');
  const newArr=[];
  strArr.map(word => newArr.push(word.length));
  return newArr.sort((a,b) => b-a).shift();
}
console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));

  
  
function largestOfFour(arr) {
  const theLargest = [];
  for (let i = 0; i<arr.length; i ++){
    theLargest.push(arr[i].sort((b,a) => a-b).shift());
  }
  return theLargest;    
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));


function confirmEnding(str, target) {
  let newStr = str.substr(-target.length);
  console.log(newStr);
  return newStr === target;
}
 
console.log(confirmEnding('Bastian', 'an'));


function repeatStringNumTimes(str, num) {
  if(num<0){
    return '';
  }
  let repeatedStr = '';
  while (num > 0){
    repeatedStr += str;
    num --;
  }
  return repeatedStr;
}
console.log(repeatStringNumTimes('abc', 4));


function truncateString(str, num) {
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}
//or
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));


function titleCase(str) {
  let strArr = str.split(' ');
  const words = strArr.map(function(word){
    let wordLetter = word[0].toUpperCase();
    let wordFull = word.substr(1).toLowerCase();
    return wordLetter + wordFull;

  });
  return words.join(' ');
  
  
}

console.log(titleCase('I\'m a little tea pot'));

function frankenSplice(arr1, arr2, n) {
  let copy1 = arr1.slice(0);
 let  copy2 = arr2.slice(0);
  copy2.splice(n, 0,...copy1);
  return copy2;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

