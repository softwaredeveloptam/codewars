
console.log(calculateYears(1000, 0.05, 0.18, 1100));
// --- Helper Functions ---

function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    
    while(principal < desired) {
      principal = principal + calcInterest(principal, interest) - calcTax(principal, interest, tax);
      years++;
    }
    
    return years;
}

function calcTax(principal, interest, tax) {
    return ((principal * interest) * tax);
}

function calcInterest(principal, interest) {
    return principal * interest;
}

