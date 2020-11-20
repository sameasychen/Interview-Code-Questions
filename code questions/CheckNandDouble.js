let array = [8, 1, 0, 2];

// console.log(array[1]);

let checkNandDouble = (nums) => {


    for (let i = 0; i < nums.length; i++) {



        for (let j = 0; j < nums.length; j++) {

            if ((j != i) && (nums[i] == 2 * nums[j])) {

                // console.log(nums[i]);
                // console.log(nums[j]);
                console.log("yes");




                return true;

            }

        }

        
    }

    return false;

};

checkNandDouble(array);

console.log(checkNandDouble(array));