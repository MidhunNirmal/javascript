let valueplay
let change
let rock= document.getElementById('rock')
let paper = document.getElementById('paper')
let scisor = document.getElementById('scissors')
console.log(paper)

const computersymb=()=>{
    let symb=['rock','paper','scissor']
   let index= Math.floor(Math.random()*3)
   return symb[index]
}
let computer= computersymb()

rock.onclick=()=>{
    console.log(rock.value)
}
paper.onclick=()=>{
    console.log(paper.value)
}
scisor.onclick=()=>{
    console.log(scisor.value)
}





