/**
 * Write Number in Expanded Form
 * 
 * @summary
 * @link 
 * @author Tam Nguyen <softwaredeveloptam@gmail.com>
 */

// --- Tests ---

console.log(expandedForm(12));
console.log(expandedForm(9000000));

// --- Helper Functions ---

function expandedForm(num) {
    var tempStr = num.toString();
    var numStr = "";
    
    for(var i = 0; i < tempStr.length; i++) {
    
      if(tempStr.charAt(i) != "0") {
        var temp = tempStr.charAt(i); 
        
        for(var x = i; x < tempStr.length-1; x++) {
          temp += "0";
        }
        
        if (i != tempStr.length-1)
            numStr += temp + " + ";
        else
          numStr += temp;
          
        temp = "";
      }
      
    }

    if(numStr.charAt(numStr.length-1) == " ") {
        for(var y = 0; y < numStr.length-3; y++) {
            temp += numStr.charAt(y);
        }
        numStr = temp;
    }

    return numStr;
}