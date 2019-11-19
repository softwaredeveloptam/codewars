/**
 * Replace With Alphabet Position
 * 
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * "a" = 1, "b" = 2, etc.
 * 
 * Example
 * alphabetPosition("The sunset sets at twelve o' clock.")
 * Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)
 * 
 * @summary Turn a string into their respective alphabet numbers
 * @link https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 */

// --- Tests ---

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log(alphabetPosition("The narwhal bacons at midnight."));
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"


// --- Helper Functions ---

/**
 * @param {String} text 
 * @returns {String}
 */

function alphabetPosition(text) {
    
    var containerArray = text.toLowerCase().split("");
    
    var numberText = containerArray.filter(function (letterTest) {
        return checkLetter(letterTest);
    }).map(function (letter) {
        return letterToNumber(letter);
    }).join(" ");

    return numberText;
}

/**
 * @param {String} letter
 * @returns {Boolean} 
 */

function checkLetter(letter) {
    var alphabet = "abcdefghijklmnopqrstuwvxyz";
    var letterCheck = alphabet.split("");

    for(let i = 0; i < letterCheck.length; i++) {
        if(letter == letterCheck[i]) {
            return true;
        }
    }

    return false;
}

/**
 * @param {String} letter 
 * @returns {Number} returns the index of where the letter is plus one 
 */

function letterToNumber (letter) {
    return "abcdefghijklmnopqrstuwvxyz".indexOf(letter) + 1;
}