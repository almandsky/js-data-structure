// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
    let len = nums.length;
    if (len < 2) {
        return null;
    }
    for (let i = 0; i < len - 1; i++){
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
};

const nums = [2, 5, 5, 1];
const target = 11;

console.assert(twoSum(nums, target) === null);
console.assert(JSON.stringify(twoSum([2, 5, 6, 1], target)) === JSON.stringify([ 1, 2 ]));
console.assert(twoSum([2], target) === null);
console.assert(twoSum([], target) === null);
console.assert(twoSum([5 , 5], target) === null);
console.assert(JSON.stringify(twoSum([5 , 6], target)) === JSON.stringify([ 0, 1 ]));