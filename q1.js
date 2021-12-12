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
    // fill in your solution here. 
   
    let resultArr = combo(slips, target)
    if(resultArr){
        //console.log(resultArr)
        return resultArr.length
    }
    return -1
};

const combo = (arr,target)=>{
    if(target == 0) return []
    if(target < 0) return  null;

    let result = null;

    for(let num of arr){
        let remainder = target - num;
        let curr = combo(arr,remainder)

        if(curr){
            curr = [...curr,num]
            result = (result == null || result.length > curr.length )? curr : result
        }
    }
    return result;
}




console.log(">> The least slips of paper: ",leastSlips([1, 1, 1, 2, 2, 3, 6, 7],5))