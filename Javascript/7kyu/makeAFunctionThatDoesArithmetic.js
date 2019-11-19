
function arithmetic(a, b, operator){
     var mathObject = {
        add: function (a, b) { return a + b; }, 
        subtract: function (a, b) { return a - b;} ,
        multiply: function (a, b) { return a * b;} ,
        divide: function (a, b) { return a/b; } ,
     }
     
     var answer = mathObject[operator](a, b);
     return answer;
}

console.log(arithmetic(5, 2, 'add'));
console.log(arithmetic(5, 2, 'subtract'));
console.log(arithmetic(5, 2, 'multiply'));
console.log(arithmetic(5, 2, 'divide'));