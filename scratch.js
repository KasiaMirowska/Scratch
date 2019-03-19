function squareElements(arr){
    return arr.map(function(num){
        return num*num;
    })
}
console.log(squareElements([1,4,6,3,7,3,5]));

function getAvarage(obj,key){
    if (!Array.isArray(obj[key]) ||
    !obj.hasOwnProperty(key) || obj[key].length === 0){
        return 0;
    }
    let sum = obj[key].reduce(function(acc,b){
        return acc + b;
    })
    return sum/obj[key].length;
}
kas ={
    bla: [1,4,234,645]
}
console.log(getAvarage(kas, 'bla'));

function filterWords(arr){
    let oddArr = [];
    for( let i = 0; i < arr.length; i++ ) {
        if (arr[i].length %2 !==0) {
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}
console.log(filterWords(['as','asdgds','s','asd','asdfdg']));

// new line