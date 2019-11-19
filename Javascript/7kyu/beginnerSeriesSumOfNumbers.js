
console.log(GetSum(0, -1)); // -1
console.log(GetSum(0, 1)); // 1

// --- Helper Functions ---
  
function GetSum(a, b) {
    var [num1, num2] = sortTwoNumbers(a, b);
    
    if(num1 != undefined && num2 != undefined) {
        let array = getArray(num1, num2);
        let sum = getSumOfArray(array);
        return sum;
    } else if(num1 == undefined && num2 == undefined) {
        return a;
    }      
}

function sortTwoNumbers(num1, num2) {
    if(num1 < num2) return [num1, num2];
    else if(num2 < num1) return [num2, num1];
    else if(num1 == num2) return undefined;
}

function getArray(start, end) {
    var array = [];
    for(start; start <= end; start++) {
      array.push(start);
    }
    return array;
}

function getSumOfArray(array) {
    let sum = array.reduce(function (accumulator, nextValue) {
        return accumulator + nextValue;
    }, 0);

    return sum;
}