/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    var resultArray = [];
    var maxValue = Math.max(...candies);
    for (let c of candies) {
        resultArray.push(c + extraCandies >= maxValue);
    }

    return resultArray;
};


// Alternate solution
var kidsWithCandies2 = function(candies, extraCandies) {
    const maxcandies = Math.max(...candies)
    return candies.map(item => {
        let hasCandies = item + extraCandies
        if (hasCandies >= maxcandies) return true
        else return false
    })
};

console.log(kidsWithCandies([2,3,5,1,3], 3));