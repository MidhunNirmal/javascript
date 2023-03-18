console.log("hello world")
let dog=document.getElementById('image');
const newd = document.getElementById('newdog')

// let y =`<img src= 'x'alt=""/>`
newd.onclick=()=>{
            fetch('https://dog.ceo/api/breeds/image/random')
               .then(response => response.json())
               .then(json =>{
                   let x= json.message

        dog.innerHTML = `<img src= '${x}'alt="no image"/>`
        
    })
        }
        // console.log(json)
        // console.log(x)