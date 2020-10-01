
console.log("CallbackFunction log:")

let add = (a,b) => {return a+b}

let multiply = (a,b)=>{return a*b}

let doWhatever = (a,b)=> {console.log(`Here are the two numbers ${a}`, `${b}`)}

let calcu=(a,b,callback)=>{
    if (typeof callback === "function")
    return callback(a,b)
}

console.log(add(2,3))
console.log(multiply(2,3))
console.log(calcu(2,3,add))
console.log(calcu(2,3,doWhatever))

var myArr = [{
    num: 5,
    str: 'apple'
},{
    num: 7,
    str: 'cabbage'
},{
    num: 1,
    str: 'banana'
}
];

myArr.sort((val1, val2)=>{
    if (val1.str < val2.str){
        return -1;
    } else {
        return 1;
    }
})

console.log(myArr)