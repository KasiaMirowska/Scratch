'use strict';
//Setup
var contacts = [
  {
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points']
  },
  {
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid']
  },
  {
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin']
  },
  {
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes']
  }
];

function lookUpProfile(name, prop){
  for (var x = 0; x < contacts.length; x++){
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return 'No such property';
      }
    }
  }
  return 'No such contact';
}
console.log(lookUpProfile('Harry', 'likes'));

//Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const newArr = realNumberArray.filter(num => Number.isInteger(num) && num > 0).map(num => num * num);
// const squaredIntegers = newArr.map(num => num * num);

console.log(newArr);
//Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line.'
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};
  
function getTempOfTmrw(avgTemperatures) {
  const {today: a,tomorrow: b} = avgTemperatures;
  const tempOfTomorrow = (a + b)/ 2;
  
  return tempOfTomorrow;
}
  
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};
  
function getMaxOfTmrw(forecast) {
  'use strict';
  const { today :{ min: a, max: b}, tomorrow: {min: c, max: d}} = forecast;
  const maxOfTomorrow = d;
 
  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName:function(){
      console.log(`${this.firstName} ${this.lastName}`);
    },
  };
  return person;
}
console.log(personMaker(this.fullName));

function hasSpaces(str) {
  let dataStr = str.split('');
  for ( let i = 0; i < dataStr.length; i++){
    if (dataStr[i] === ' ') {
      return true;
    }
  } return false;
}

console.log(hasSpaces('dhgjfgk jftghk fghjk'));

function XO(str) {
  let a = str.replace(/x/gi, '');
  let b = str.replace(/o/gi, '');
  return a.length === b.length;
}
console.log(XO('oOoxMx'));

function getMiddle(s){
  if (s.length % 2 === 0){
    let half1 = s.slice(0, s.length / 2);
    let half2 = s.slice(s.length/2);
    return half1[half1.length - 1] + half2[0];
  }
  if (s.length % 2 !== 0) {
    let half = s.slice(s.length / 2);
    return half[0];
  }
}
console.log(getMiddle('kasiav'));

function findShort(s){
  let wordsArr = s.split(' ');
  return wordsArr.map((word) => word.length).sort((a,b) => a - b).shift();
}
console.log(findShort('kasia kocha jakuba ba'));


function divisors(integer) {
  let divs = [];
    
  for(let i = 2; i < integer; i++) {
    if(integer % i === 0) {
      console.log('hi');
      divs.push(i);
    }
  } if (divs.length === 0){
    return `${integer} is prime`;
  } 
  return divs;
}
console.log(divisors(13));

function isInRange(num, range) {
  let minNum = range.a;
  let maxNum = range.b;
  console.log(minNum);
  if ((num < minNum) || (num > maxNum)){
    return false;
  } else {
    return true;
  }
}
// return rangeArr.includes((item) => item == num );

console.log(isInRange(1, { a: 6, b: 7 }));