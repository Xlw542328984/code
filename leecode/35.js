// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存
// 在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。


var searchInsert = function(nums, target) {
    var n = nums.length;
    if(nums[n-1] < target)
    {
        return n;
    }
    for(var i = 0; i < n; i++){
        if(nums[i] == target){
            return i;
        }
        if(nums[i] > target){
            return i;
        }
    }
};