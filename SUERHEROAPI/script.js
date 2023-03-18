const tocken= "10223569763528853"
let baseurl = "https://superheroapi.com/api.php/10223569763528853"
let name;
let name1= document.getElementById('namet')
let name2= document.getElementById('nameb')
let id1= document.getElementById('idt')
let id2= document.getElementById('idb')
let pichero = document.getElementById('pic')
let ran = document.getElementById('randomh')
let name3 = document.getElementById('heading')
let stat1 = document.getElementById('stat')
let stat2 = document.getElementById('stattext')

let getstat =()=>{
    let combat = hero.powerstats.combat
    let durablity = hero.powerstats.durablity

    stat2.innerHTML=`<p>combat : ${combat}</p>`
}

ran.onclick= ()=>{
    let ids = Math.floor (Math.random()*127)
    console.log(ids)
    fetch(`${baseurl}/${ids}`)
        .then(Response=>Response.json())
        .then(hero=>{
            console.log(hero)
            console.log(hero)
            let tempimg = hero.image.url
            let tempname = hero.name
            pichero.innerHTML =`<img src="${tempimg }"/>`
            name3.innerHTML = `<h1>${tempname}<\h1>`
            stat1.onclick=()=>{
                let combat = hero.powerstats.combat
                let durablity = hero.powerstats.durability
                let speed = hero.powerstats.speed
            
                stat2.innerHTML=`<p>combat : ${combat}<br>durablity : ${durablity} <br> speed: ${speed}</p>`
            }
            

})
}

name2.onclick=()=>{
    let names= name1.value
    console.log(names)
    fetch(`${baseurl}/search/${names}`)
        .then(Response=>Response.json())
        .then(hero=>{
            console.log(hero)
            console.log(hero.results[0])
            let tempimg = hero.results[0].image.url
            let tempname = hero.results[0].name
            pichero.innerHTML =`<img src="${tempimg }"/>`
            stat1.onclick=()=>{
                let combat = hero.results[0].powerstats.combat
                let durablity = hero.results[0].powerstats.durability
                let speed = hero.results[0].powerstats.speed
            
                stat2.innerHTML=`<p>combat : ${combat}<br>durablity : ${durablity} <br> speed: ${speed}</p>`
            }
           
})
    
}
id2.onclick=()=>{
    
    let ids= name1.value
    console.log(ids)
    fetch(`${baseurl}/${ids}`)
        .then(Response=>Response.json())
        .then(hero=>{
            console.log(hero)
            console.log(hero)
            let tempimg = hero.image.url
            pichero.innerHTML =`<img src="${tempimg }"/>`
})
    
}