/*

Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

*/

function findSum(n) {
    var threes = 0, 
        fives = 0, 
        duplicates = 0;
    var threesCount = 0, 
        fivesCount = 0, 
        duplicatesCount = 1;
    
    while (threesCount * 3 < n) {
        threes += (3 * threesCount);
        threesCount++; 
    }
    
    while (fivesCount * 5 < n && n > 5) {
        fives += (5 * fivesCount);
        fivesCount++;
    }
    
  while ((duplicatesCount * 3) < n) {
      
      if((duplicatesCount * 3) % 5 == 0) 
        duplicates += (3 * duplicatesCount);
      duplicatesCount++;
    }
    
    var sum = 0;
    return sum += (n + threes + fives) - duplicates;
}

console.log(findSum(5));
// logs 8
console.log(findSum(10)); 
// logs 33
console.log(findSum(100));

console.log(findSum(8)); // ==> 22?
console.log(findSum(7)); //==> 21?
console.log(findSum(4)); // ==> 7? 
console.log(findSum(15)); // ==> 60

/*

for (let i = 0; i * 3 < n; i++)
    threes += (i * 3)

for (let i = 0; i * 5 < n; i++)
    fives += (i * 5)

for (let i = 0; i * 3 < n; i++)
    if((i * 3) % 5 == 0)
         duplicates += i * 3;
    
    var sum = 0;
    return sum += (n + threes + fives) - duplicates;

*/