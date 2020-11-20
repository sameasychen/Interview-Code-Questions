// Your company assigns each customer a membership ID, and you are implementing a check digit for those IDs. 
// The check digit should be calculated by adding up all digits in each membership ID. If the result of the sum is a number with more than a single digit, another iteration is required, and the digits of the result also should be added together. This process should repeat until a single-digit number is calculated. For example, for the membership ID "55555" the sum of all digits is 25. Because this is not a single-digit number, 2 and 5 would be added, and the result 7, would be the check digit. 


console.log("Sumnum log:")


function createCheckDigit(membershipId) {

    var sum = membershipId
    while (sum > 10) {
        let numDit = sum.toString().length
        let left = sum
        let calSum = 0

        for (i = 0; i <= numDit; i++) {

            var lastDig = left % 10;
            calSum += lastDig
            left = (left - lastDig) / 10
        }
        sum = calSum

    }

    return sum;
}

console.log(createCheckDigit(55551));


// Second Way
const calDig = (number) => {


    let remainNum = number;
    // let calDigit = 0;

    while (remainNum > 10) {

        let calDigit = 0;

        while (remainNum > 0) {

            let lastNum = remainNum % 10;
            calDigit += lastNum;
            remainNum = (remainNum - lastNum) / 10;
            console.log("remain: " + remainNum);
            console.log("Digit: " + calDigit);

        }

        remainNum = calDigit;
    }

    return remainNum
}

console.log(calDig(55551));
