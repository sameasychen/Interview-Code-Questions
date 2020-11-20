console.log("DomManipulation log:")

const inputHTML = document.querySelector('.inputContent')
const listHTML = document.querySelector('.list')
const liHTML = document.querySelectorAll("li")
const buttonAdd = document.querySelector(".buttonAdd")
const buttonDel = document.querySelector(".buttonDel")

buttonAdd.addEventListener('click', function(){
    const newLi = document.createElement('LI')
    const LiContent = document.createTextNode(`${inputHTML.value}`)

    newLi.setAttribute("class", "newName")
    newLi.setAttribute("style", "color:red")

    newLi.appendChild(LiContent)
    
    listHTML.appendChild(newLi)
    console.log(newLi)
    inputHTML.value = ''
})

buttonDel.addEventListener('click', function(){
    listHTML.removeChild(listHTML.childNodes[0])
    
})

// buttonAdd.addEventListener("click", ()=>{
//     const newLi = document.createElement("LI");
//     const newLiContent = document.createTextNode(`${inputHTML.value}`)

//     newLi.appendChild(newLiContent);

//     listHTML.appendChild(newLi);

//     inputHTML.value =""
// })

// buttonDel.addEventListener('click', ()=>{
//     console.log(listHTML.childNodes[0])
//     listHTML.removeChild(listHTML.childNodes[0])
// })