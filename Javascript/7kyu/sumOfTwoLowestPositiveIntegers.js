
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); // 10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); // 24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); // 16
console.log(sumTwoSmallestNumbers([10, 500, 20, 10, 50])); // 20
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); 3453455
console.log(sumTwoSmallestNumbers([100, 90, 80, 70, 60, 50])); // 110
console.log(sumTwoSmallestNumbers([100, 1, 100, 100])); // 101
console.log(sumTwoSmallestNumbers([200,100,400,200,100,99])) // 199


// --- Helper Functions ---

function sumTwoSmallestNumbers(numbers) {  
    var firstNum = findSmallestNumber(numbers);
    var secondNum = findSmallestNumber(numbers, firstNum);
     
    return firstNum + secondNum;
}

function removeSmallestNumber(array, avoidNumber) {
    var avoid = array.indexOf(avoidNumber, 0);
    array.splice(avoid, 1);
    return array;
}

function findSmallestNumber(arrayOfNumbers, avoidNumber) {
    
    if(avoidNumber != null) {
        var testArray = removeSmallestNumber(arrayOfNumbers, avoidNumber);
    } else {
        var testArray = arrayOfNumbers;
    }

    var testNum = testArray[0];

    var smallestNum = testArray.reduce(function (currentNum, nextNum) {
        if (currentNum < nextNum) {
            return currentNum;
        } else if (nextNum < currentNum) {
            return nextNum;
        } else if (currentNum == nextNum) {
            return currentNum;
        } else {
            return testNum;
        }

    }, testNum);

    return smallestNum;
}
