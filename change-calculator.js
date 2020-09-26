const calculateChange = function(total, cash) {
  // Your code here
  let totalChange = cash - total;
  console.log(totalChange)
  let change = {};

  if (totalChange > 2000) {
    totalChange-= 2000;
    change.twentyDollar = 1;
  }

  if (totalChange > 1000 && totalChange < 2000) {
    totalChange-= 1000;
    change.tenDollar = 1;
  }

  if (totalChange > 500 && totalChange < 1000) {
    totalChange-= 500;
    change.fiveDollar = 1;
  }

  if (totalChange > 400 && totalChange < 500) {
    totalChange-= 400;
    change.twoDollar = 2;
  } 
  
  if (totalChange > 200 && totalChange < 400) {
    totalChange-= 200;
    change.twoDollar = 1;
  }

  if (totalChange > 100 && totalChange < 200) {
    totalChange-= 100;
    change.oneDollar = 1;
  }

  if (totalChange > 75 && totalChange < 100) {
    totalChange-= 75;
    change.quarter = 3;
  } 
  
  if (totalChange > 50 && totalChange < 75) {
    totalChange-= 50;
    change.quarter = 2;
  } 
  
  if (totalChange > 25 && totalChange < 50) {
    totalChange-= 25;
    change.quarter = 1;
  }

  if (totalChange > 20 && totalChange < 25) {
    totalChange-= 20;
    change.dime = 2;
  } 
  
  if (totalChange > 10 && totalChange < 20) {
    totalChange-= 10;
    change.dime = 1;
  }

  if (totalChange > 5 && totalChange < 10) {
    totalChange-= 5;
    change.nickel = 1;
  }

  if (totalChange > 1 && totalChange < 5) {
    change.penny = totalChange;
  }

 return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));


// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// Twenty dollars 2000
// Ten dollars 1000
// Five dollars 500
// Two dollars 200
// One dollar 100
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)