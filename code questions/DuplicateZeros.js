let array = [8, 1, 0, 2, 1, 0, 5, 8];

// console.log(array[1]);

let duplicateZeros = (nums) => {

    let flag = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i]);

        if (nums[i] == 0) {
            if (flag === 0) {

                for (let j = (nums.length - 1); j > i; j--) {
                    nums[j] = nums[j - 1];
                }
                // nums[i + 1] = 0;
                flag = 1;
            } else {
                flag = 0;
            }
        }

    }

    console.log(nums);

};

duplicateZeros(array)

// console.log(duplicateZeros(array));