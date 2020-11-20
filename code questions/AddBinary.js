let array = [8, 3, 1, 8, 9, 1];

let a = "0b11";
let b = '0b1';

let addBinary = (a, b) => {

    console.log(typeof a);

    let aa = Number(a.toString());
    let bb = Number(b.toString());

    console.log(aa+bb);

    
    return (aa+bb).toString(2);



    // console.log(typeof aa);

    // console.log("a: "+aa);
    // console.log(bb);

    // console.log(c);

};

// addBinary(a,b);

console.log(addBinary(a, b));