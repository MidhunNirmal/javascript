let rate = document.getElementById('billTotalInput')
let noofpep = document.getElementById('numberOfPeople')
let tip = document.getElementById('tipInput')
let result = document.getElementById('perPersonTotal')
let plus = document.getElementById('incr')
let minus = document.getElementById('decr')
// console.log(rate)
let  totpep=Number(noofpep.innerText)
// console.log(rate.Value)
// console.log(numofpeople)
const calculateBill = () => {
    let numofpeople=Number(noofpep.innerText)
    // increasePeople()
    // decreasePeople()
    let ratenum=Number(rate.value)
    let tipnum=Number(tip.value)
    let th = ratenum+(ratenum*tipnum/100)
    let perperson =th/numofpeople
    result.innerText= perperson.toFixed(2)
    return perperson



}
const increasePeople = () => {
    plus.onclick=()=>{
       
        totpep++;
        noofpep.innerText= totpep
        calculateBill()
    }

}
const decreasePeople = () => {
    minus.onclick=()=>{
        if (totpep <= 1) {
            return
        }
        
        totpep--;
        noofpep.innerText= totpep
        calculateBill()
    }

}