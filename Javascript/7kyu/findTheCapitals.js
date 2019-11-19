/*
Instructions
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/




// --- Helper Functions ---

var capitals = function (word) {
    var array = [];
    
    for(let i = 0; i < word.length; i++) {
        let test = capitalCheck(word.charAt(i));
        if (test == true) {
            array.push(i);
        }
    }

    return array;
};

function capitalCheck(letter) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var letterCheck = alphabet.split("");

    for(let i = 0; i < letterCheck.length; i++) {
        if(letter == letterCheck[i]) {
            return true;
        }
    }

    return false;
}