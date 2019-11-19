/*

If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)
The input will always be in lowercase and never be empty.

*/

function wordsToMarks(string){

    var sum = 0;

    for(let i = 0; i < string.length; i++) {
        sum += letterToNumber(string.charAt(i));
    }
  
    return sum;
}

function letterToNumber (str) {

    if(str == "a") return 1;
    else if(str == "b") return 2;
    else if(str == "c") return 3;
    else if(str == "d") return 4;
    else if(str == "e") return 5;
    else if(str == "f") return 6;
    else if(str == "g") return 7;
    else if(str == "h") return 8;
    else if(str == "i") return 9;
    else if(str == "j") return 10;
    else if(str == "k") return 11;
    else if(str == "l") return 12;
    else if(str == "m") return 13;
    else if(str == "n") return 14;
    else if(str == "o") return 15;
    else if(str == "p") return 16;
    else if(str == "q") return 17; 
    else if(str == "r") return 18;
    else if(str == "s") return 19;
    else if(str == "t") return 20;
    else if(str == "u") return 21;
    else if(str == "v") return 22;
    else if(str == "w") return 23;
    else if(str == "x") return 24;
    else if(str == "y") return 25;
    else if(str == "z") return 26;
}