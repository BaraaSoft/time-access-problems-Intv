/*

Q1

There is a box. There are slips of paper with numbers written on them.
There is a target value. Put in the least slips of paper to add to the target value exactly.
If no combo of the slips can add to the target value, return -1.

*/




/** 
   * @param {number[]} slips
   * @param {number} target 
   * @return {number} 
*/
var leastSlips = function (slips, target) {
    let n = slips.length;

    let hasPositives = false;
    for (let j = 0; j < n; j++)
        if (slips[j] > 0) {
            hasPositives = true;
            break;
        }
    if (!hasPositives) return -1;

    let min = 0;

    const P = []; // prefix sums
    P[0] = 0;
    let positiveSum = 0;
    for (let j = 0; j < n; j++) {
        if (slips[j] == target) return 1;
        P[j + 1] = P[j] + slips[j];

        if (slips[j] <= 0) continue;
        if (slips[j] > 0) positiveSum += slips[j];
        if (positiveSum < target) continue;

        for (let i = 1; i <= (min ? min - 1 : j + 1); i++)
            if (P[j + 1] - P[j + 1 - i] == target) {
                min = i;
                break;
            }
    }

    return min || -1;
};


// const combo = (arr,target)=>{
//     if(target == 0) return []
//     if(target < 0) return  null;

//     let result = null;

//     for(let num of arr){
//         let remainder = target - num;
//         let curr = combo(arr,remainder)

//         if(curr){
//             curr = [...curr,num]
//             result = (result == null || result.length > curr.length )? curr : result
//         }
//     }
//     return result;
// }






console.log(">> The least slips of paper: ",leastSlips([1, 1, 1, 2, 2, 3, 6, 7],5))
console.log(">> The least slips of paper: ", leastSlips([1, 3, 6, 7], 2))