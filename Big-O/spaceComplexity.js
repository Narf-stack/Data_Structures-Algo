// What causes Space complexity?-
// Variables
// Data Structures
// Function Call
// Allocations


function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}
boooo(n)

// Space complexity ->  O(1)
// One function call, and no more 

function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6)
// Space complexity ->  O(n)
// One function call + n allocations in the array  =   O(1 + n) ->  O(n)