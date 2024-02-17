/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    let minLen = Math.min(str1.length, str2.length);
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

var iterator = function (str1, str2, cstr, minLen) {
    if (cstr.length == 0)
        return "";
    let reg = new RegExp(cstr, "g");
    if (str1.replace(reg, "").length == 0 && str2.replace(reg, "").length == 0) {
        return cstr;
    }
    else {
        return iterator(str1, str2, String(cstr).substring(0, cstr.length - 1), minLen);
    }
}

//Another type of implementation
var gcdOfStrings2 = function (str1, str2) {
    if(str1 + str2 != str2 + str1) return '';
 
    let isValidate = (w,str) =>{
        if(str.length == 0) return true;
        if(!str.startsWith(w)) return false;
        return isValidate(w,str.slice(w.length))
    }

    let res = ''

    for(let i = 1; i<=str1.length; i++){
        let curV = str1.slice(0,i)
        if(isValidate(curV,str2) && isValidate(curV,str1)) res = curV;
    }

    return res;
}


console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("LEET", "CODE"));
console.log(gcdOfStrings("ABCDEF", "ABC"));

console.log(gcdOfStrings2("ABABAB", "ABAB"));
console.log(gcdOfStrings2("ABCABC", "ABC"));
console.log(gcdOfStrings2("LEET", "CODE"));
console.log(gcdOfStrings2("ABCDEF", "ABC"));