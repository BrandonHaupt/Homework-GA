let arr = [100, 102, 103, 104, 105, 106, 50]

const twoSum = function(nums, target){
    for(let i = 0; i < nums.length, i+=1;){
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
}

twoSum(arr)