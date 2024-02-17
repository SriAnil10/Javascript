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

console.log(kidsWithCandies([2,3,5,1,3], 3));