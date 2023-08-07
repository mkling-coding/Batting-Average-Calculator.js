// Mark Klingelhoefer
// Batting Average Calculator
// Finds the batting average when given an array of games with at bats and hits

// Examples of good input
let seasonStats1 = [[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]];
let seasonStats2 = [[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]];
let seasonStats3 = [[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]];

// Batting avg function
const battingAvg = seasonStats => {
    // Variable to add total hits
    let hits = 0;
    // Variable to add total at bats
    let atBats = 0;
    // For each index of the array
    for (let i = 0; i < seasonStats.length; i++) {
        hits += seasonStats[i][0];
        atBats += seasonStats[i][1];
    }
    // Return hits divided by at bats (average) and remove the 0 and limit to three decimal points after the 0
    return ((hits/atBats).toFixed(3)).slice(1, 5);
}

// Examples of function calls
// console.log(battingAvg(seasonStats1));
// console.log(battingAvg(seasonStats2));
// console.log(battingAvg(seasonStats3));