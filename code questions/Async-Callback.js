console.log("Asyn-Callback log:")

const posts = [
    {title: 'Post One', body: 'This is post one.'},
    {title: 'Post Two', body: 'This is post two.'},
]

function getPosts(){
    const myP = document.querySelector('.Callback_Asyn')
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        })
        myP.innerHTML = output
    },1000)
}

getPosts()

function createPost(post, callback){
    setTimeout(()=> {
        posts.push(post);
        callback()
    }, 2000)
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts)