let array = "This is the sentence.";


let reverseString = (theString) => {

    let splitString = theString.split(' ');

    console.log(splitString);

    temp=splitString[0];

    for(let i=0; i< splitString.length; i++){

        splitString[i] = splitString[i+1];
    }

    splitString[splitString.length-1] = temp;

    console.log(splitString);



};

reverseString(array);

// console.log(reverseString(array));