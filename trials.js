"use strict"

// Esther's solution



// Ruth's Solution
function viralAdvertising(n) {
    // Write your code here
  let share = 5, like = 0, total = 0;
  for(let i = 1; i<=n; i++){
      like = Math.floor(share/2);
      share = like*3;
      total +=like;
  }
  return total;
}