// Implement the removeProperty function which takes an object and property name, and does the following:
// If the object obj has a property prop, the funciton removes the property from the object and returns true; in all other cased it returns false.

console.log("RemoveProperty log:")

const hero = {
    name: 'Batman',
    sex: 'male',
    cute:'no'
}

// let removeProp=(obj, prop)=>{

//     console.log(obj[prop])

//     if (obj[prop]){
//         delete obj[prop]
//     }else{
//         console.log("no prop")
//     }

//     console.log(obj)
// }

// removeProp(hero,'yes');



function removeProperty(obj, prop) {

    // let propname = prop

    if (prop in obj) {

        delete obj[prop]
        
        console.log("true")
    }
    else {
        console.log("false")
    }

}

console.log(hero)
removeProperty(hero, "cute")
console.log(hero)

