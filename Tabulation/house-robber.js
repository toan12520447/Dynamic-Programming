/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    if (nums.length < 1) return 0;
    if (nums.length == 1) return nums[0];

    let table = Array(nums.length).fill(0);
    table[0] = nums[0];
    table[1] = Math.max(nums[0],nums[1]);
    
    for (let i = 2; i < nums.length; i++){
        table[i] = Math.max(table[i - 1], table[i - 2] + nums[i]);
    }
    return table[nums.length - 1];
};