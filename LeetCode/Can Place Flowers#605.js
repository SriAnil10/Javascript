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

console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2));
