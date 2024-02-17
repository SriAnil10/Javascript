/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let minLen = Math.min(str1.length, str2.length);
    let maxLen = Math.max(str1.length, str2.length);
    let cstr = "";
    for (let i = 0; i < minLen; i++) {
        if (str1[i] == str2[i]) {
            cstr += str1[i];
        }
        else {
            if (cstr == "") {
                return cstr;
            }
            break;
        }
    }

    return iterator(str1, str2, cstr, minLen, maxLen);
    
};

var iterator = function (str1, str2, cstr, minLen, maxLen) {
    if (cstr.length == 0)
        return "";
    let reg = new RegExp(cstr, "g");
    if (str1.replace(reg, "").length == 0 && str2.replace(reg, "").length == 0) {
        return cstr;
    }
    else {
        return iterator(str1, str2, cstr.toString().substring(0, cstr.length - 1), minLen, maxLen);
    }
}


console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABCDEF", "ABC"));