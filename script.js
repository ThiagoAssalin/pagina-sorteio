

let nome = document.getElementById("input")
let lista = document.getElementById("lista")
let nomeAdd = []
let i = 0


function add(){
    nomeAdd.push(nome.value)  
    lista.innerHTML += "<li>" + nomeAdd[i] + "</li>"
    i++  
}   

function sorteio(){
    let np = nomeAdd.length
    let ns = Math.floor(Math.random()*np)
    let sorteado = document.getElementById("sorteado")
    sorteado.innerHTML = nomeAdd[ns]
}