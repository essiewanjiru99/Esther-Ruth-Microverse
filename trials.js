"use strict"

// Esther's solution
function countApplesAndOranges(s, t, a, b, apples, oranges){
    let appleCount = [];
    let orangeCount = [];
    let applesAtSamHouse = 0;
    let orangesAtSamHouse = 0;

    apples.map((x)=>{
        appleCount.push(x + a);
    })
    oranges.map((x)=>{
        orangeCount.push(x + b);
    })
    appleCount.map((x) =>{
        if(x >= s && x <= t){
            applesAtSamHouse++;
        }
    })
    orangeCount.map((x) =>{
        if(x >= s && x <= t){
            orangesAtSamHouse++;
        }
    })

    console.log(applesAtSamHouse);
    console.log(orangesAtSamHouse)
    
}



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