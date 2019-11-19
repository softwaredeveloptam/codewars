// https://www.codewars.com/kata/complete-the-pattern-number-7-cyclical-permutation/train/javascript

/* Task:
You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string
*/

console.log(pattern(5));

/*

12345
23451
34512
45123
51234

*/

// --- Helper Functions ---

function pattern(patternLimit) {
    if(patternLimit <= 0) {  // if patternLimit is negative or 0, returns empty string
        return ""; 
    }
    var lineStartsWith = 1;
    return output = verticalLines(lineStartsWith, patternLimit);   
}

function verticalLines(verticalLetterCounter, patternLimit) {
    var completePattern = "";

    for(var i = 0; i < patternLimit; i++) {
        completePattern += horizontalLines(verticalLetterCounter, patternLimit);
        verticalLetterCounter = i+2;
        if(i < patternLimit-1) {
            completePattern += "\n";
        }
    }

    return completePattern;
}


function horizontalLines(letterCounter, patternLimit) {
    var lineStr = "";
    for(var x = 0; x < patternLimit; x++) {
        lineStr += letterCounter.toString();
        letterCounter++;
        if(letterCounter > patternLimit) {
            letterCounter = 1;
        }
    }
    return lineStr;
}

