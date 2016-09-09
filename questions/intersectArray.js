/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:

    Each element in the result must be unique.
    The result can be in any order.

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    var long = [];
    var short = [];
    if (nums1.length >= nums2.length) {
        long = nums1;
        short = nums2;
    } else {
        long = nums2;
        short = nums1;
    }
    for (var i = 0; i < short.length; i++) {
        var item = short[i];
        if (result.indexOf(item) >= 0) {
            continue;
        }
        var pos = long.indexOf(item);
        if (pos >= 0) {
            result.push(item);
            long.splice(pos,1);
        }
    }
    return result;
};