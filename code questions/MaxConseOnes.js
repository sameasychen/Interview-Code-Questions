let array = [0, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1];



let findMaxConsecutiveOnes = (nums)=> {
    
    let counter = 0;

    let max =0;

    nums.forEach(data => {
        if(data === 1){
            counter++;
            // console.log(counter);

        }else{
            counter=0;

        }

        if(counter >max){
            max = counter; 

        }
       
    });

    console.log(max);

    return max;

};

console.log(findMaxConsecutiveOnes(array));