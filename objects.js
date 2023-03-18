let personss = {
    name: "midhun",
    college: "geci"
}
// dot nottation of accessing the object
console.log(personss.name);
//bracket nottation for accessing the object
console.log(personss['name']);

// to add a new 
personss.phone = '8547635225';

console.log(personss);
//
let details = (name,phonen,age) =>{
    person = {
        name: name,
        age: age,
        phone:phonen
    }
    let detail = `hii ${person.name} you are ${person.age} years old, your phone number is ${person.phone}  `
    return detail;
}
console.log(details('Midhun','9526575165',24));

// meathods

let finance= (salery,bribe) =>{

    money={
    salery:salery,
    black:bribe,
    income: function(){
       return this.salery+this.black;
    }
    }
    let moneyprint = `the salery of him is ${money.salery} and his black money is ${money.black} so the total income will be ${money.income()} `
    return moneyprint;
}
console.log(finance(10000,4000000));

