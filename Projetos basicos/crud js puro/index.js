const twiiter = {
    users:[
        {
            user: "melinor"
        }
    ],
    posts:[
        {
            id:1,
            owner:"melinor",
            twiiti:"OIcomo vai"
        }
    ]
}

//C

function post(dados){
twiiti.posts.push({
    id: twiiter.posts.length + 1,
    owner: dados.owner,
    twiiti: dados.twiiti
})
}
post({owner:"melinor", twiiti:'affs tchau'})

//r

function readPost(){
    return twiiter.posts.filter
}

//u

function updatePost(id, newPost){
   const PostUpdated = readPost().find((post)=>{
        return post.id === id
    })
console.log(PostUpdated)
}
updatePost(2,'melinor')

//d

function deletePost (id){
    readPost.filter((PostUpdated))
}