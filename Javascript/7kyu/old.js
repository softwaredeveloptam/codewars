function GetSum(a, b) {
    var sum = 0;
     
    if(a < b) {
        let arrayAB = getArray(a, b);
        
        sum = arrayAB.reduce(function (accumulator, nextValue) {
            return accumulator + nextValue;
        }, 0); 
       
        return sum;
     } else if(b < a) {
        var arrayBA = getArray(b, a);
        
        sum = arrayBA.reduce(function (accumulator, nextValue) {
            return accumulator + nextValue;
        }, 0); 
        
        return sum;
     } else if(a == b) {
        return a;
     }      
}

function getArray(start, end) {
    var array = [];
    for(start; start <= end; start++) {
      array.push(start);
    }
    return array;
}