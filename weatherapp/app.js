// let city13 = document.getElementById('city-input')
let city23
const city = document.getElementById('city-input');
let btn1 = document.getElementById('bt1')
let cityname = document.getElementById('city-name')
let weathertype = document.getElementById('weather-type')
let tempr = document.getElementById('temp')
let min = document.getElementById('min-temp')
let max = document.getElementById('max-temp')
let searchCity=()=>{
    city23 = city.value

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b7c0cdb5e4mshd35b5203f81b691p1b2ed6jsn82373bca8c2a',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    fetch(`https://open-weather13.p.rapidapi.com/city/${city23}`, options)
        .then(response => response.json())
        .then(response => {console.log(response)
        // .catch(err => console.error(err));
    
    // console.log("hello")
    console.log(city.value)
    // console.log(city.value)
    console.log(response.name)
    
    cityname.innerHTML=`<h1>${response.name}</h1>`
    weathertype.innerHTML=`<h1>${response.weather[0].main}</h1>`
    weathertype.innerHTML=`<h1>${response.weather[0].main}</h1>`
    tempr.innerHTML=`<p>${response.main.temp}</p>`
    min.innerHTML=`<p>${response.main.temp_min}</p>`
    max.innerHTML=`<p>${response.main.temp_max}</p>`
        })
}
// let city23
let baselink ="https://open-weather13.p.rapidapi.com/city"

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b7c0cdb5e4mshd35b5203f81b691p1b2ed6jsn82373bca8c2a',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// fetch(`https://open-weather13.p.rapidapi.com/city/${city23}`, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// let cityname = document.getElementById('city-name')

// console.log(cityname)







