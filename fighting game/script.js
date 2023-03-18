


// document.addEventListener("keydown",print=(e)=>{
//     if (e.key=='q') {
//         punch1 = document.getElementById('punch')
//         punch1.play()
    
//  }
// })
let h1 = document.getElementById('p2Health')
let h2 = document.getElementById('p1Health')
let health1 =Number (h1.innerText)
let health2 =Number (h2.innerText)
let simula = document.getElementById('play')
let rest = document.getElementById('reset')
let atk = document.getElementById('attack')
let heal = document.getElementById('heal')



console.log(health1);

class player  {
    strike() {
        health2 -=30
        if (health2<0) {
            health2=0
        }
        h1.innerText=health2
        
    }
    heal(){
        health2+=30
        if (health2>100) {
            health2=100
        }
        h1.innerText=health2
    }
    
}
let player2 = new player;
let player1 = new player;

simula.onclick=()=>{

    h1.innerText="10"
    health2 +=30
    h2.innerText=health2
    
    
}
rest.onclick=()=>{
    h1.innerText="100"
    h2.innerText="100"
    
}
// SVGFEDropShadowElement