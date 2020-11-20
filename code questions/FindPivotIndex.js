let array = [8, 3, 1, 8, 9,1];

// console.log(array[1]);

let findPivotIndex = (nums) => {

    let total =0;

    nums.forEach(data => {
        total += data;
    });

    console.log(total);

    let left =0;

    for (let i = 0; i < nums.length; i++) {

        if(left === total- nums[i] -left){
            return i;
        } else {
            left += nums[i];

        }

        
    }

    return -1;


};

// findPivotIndex(array);

console.log(findPivotIndex(array));