/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n == 0)
        return true;

    let len = flowerbed.length;
    
    if (len == 1) {
        if (flowerbed[0] == 0) {
            flowerbed[0] = 1;
            n--;
        }
    }
    else {
        for (let i = 0; i < len; i++) {
            if (flowerbed[i] == 1)
                continue;

            if (i == 0) {
                if (flowerbed[i + 1] == 0) {
                    n--;
                    flowerbed[i] = 1;
                }
            }
            else if (i + 1 == len) {
                if (flowerbed[i - 1] == 0) {
                    n--;
                    flowerbed[i] = 1;
                }
            }
            else {
                if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                    n--;
                    flowerbed[i] = 1;
                }
            }

            if (n == 0)
                return true;
        }
    }
    
    return n == 0;
};

// Alternate solution
var canPlaceFlowers2 = function(flowerbed, n) {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] == 0 && (flowerbed[i - 1] == 0 || i == 0) && (flowerbed[i + 1] == 0|| i == flowerbed.length - 1)){
            count++; 
            flowerbed[i] = 1;
            if(count >= n) {
                break;
            }
        }
    }
    if(count >= n) {
        return true;
    } else {
        return false;
    }
};

//Alternate solution
var canPlaceFlowers3 = function(flowerbed, n) {
    if (n === 0) return true;
    let i = 0;

    while (i < flowerbed.length) {
        if (flowerbed[i] === 1) {
            i += 2;
        } else {
            if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
                n--;
                if (n === 0) return true;

                flowerbed[i] = 1;
                i += 2;
            } else {
                i++;
            }
        }
    }

    return false;
};

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));
