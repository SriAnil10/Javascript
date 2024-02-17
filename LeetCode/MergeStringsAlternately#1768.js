/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let loopCount = Math.max(word1.length, word2.length);
    let returnStr = "";
    for (let i = 0; i < loopCount; i++)
    {
        if (word1.length > i)
        {
            returnStr += word1[i];
        }

        if (word2.length > i)
        {
            returnStr += word2[i];
        }
    }

    return returnStr;
};


let answer = mergeAlternately("abc", "pqr");
console.log(answer);