var removeElement = function(nums, val) {
    //动态规划
    var a=0;
    var n = nums.length;
    for(let i = 0;i < n; i++){
        if(nums[i] != val){
            console.log(nums[i]);
            nums[a] = nums[i];
            console.log(nums[i]);
            a++;
        }
    }
    return a;
};
var val = 2;
var nums = [3,2,2,3];
console.log(removeElement(nums,val));

