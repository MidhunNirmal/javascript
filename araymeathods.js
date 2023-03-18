// let result = [1,2,3,4,5,6,7].map(number => number*2)
// console.log(result)
let actors=[{name:'midhun',age: 21},{name:'avinash',age: 20},{name:'avinash',age: 20},{name:'avinash',age: 20}];
let rse= actors.filter(actor => actor.age >= 20);
let result = rse.map(val => val.age)


let sum= (a,b)=>{
    
    let resultadd=a+b;
    return resultadd

}
console.log(sum(10,20));

num=result.reduce(sum);
console.log(num);
