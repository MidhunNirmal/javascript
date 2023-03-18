class car{
    colour = "yellow"
    speed = 100;
    constructor(rpm,brand){
        this.rpm =rpm
        this.brand = brand
    }
    // speed(){
    //     console.log(`you are riding at` +this.speed)
    // }
}
const car1= new car(2000,"ferari")
console.log(car1.brand)
// car1.speed()
console.log(Object.keys(car1)); 