const users = [
    {
        userId: "melinor",
        pass: "meli101103"
    },
    {
        userId: "vinicios",
        pass: "10211"
    },
    {
        userId: "roger",
        pass: "24111"
    }
]

const btn = document.getElementById('btn-login')

let auth = false

btn.addEventListener('click',function login(){
console.log('rodando')
btn.style = "background-color:blue; color:white;"
    let userInput = document.getElementById('userLogin').value
    let passInput = document.getElementById('password').value

    for(let i in users){
        if(userInput == users[i].userId && passInput == users[i].pass){
            console.log(userInput)
            auth = true
        }
    }
    if(auth == true){
        window.location = "home.html"
    }else{
        alert('usuario ou senha incorretos')
    }
    
})




