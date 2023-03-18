// let me=[5,2,3,4,5,6,10]
// for(const digits of me ){
//     console.log(digits);//the digit is a variable that in first itration it is 1 (value of zeroth index), 2nd itration it is 2(value of 1 st index) and so on

// }
// let lettercounter =()=>{
//     const midhun = `this is a paragraph for cheacking the no of charecter in a string`
//         let i=0;
//         for (letter in midhun){
//             i++
//         }
//         return i;
    
// }
// console.log(lettercounter());


// sum of numbers in a array

// let sum =(numbers)=>{
//     let sum = 0;
//     Number(sum);
//     for (const digits of numbers){
//         sum = sum+digits;
//     }
//     return sum;

// 
// let me = [1,24,34,54,66];
// console.log(sum(numb));

// function to find the max  number in an  array
// let maximum = (numb)=>{
//     let i= 0
//     for (digit of numb){
//     //    console.log(digit)
//         if (digit > i) {
//             i = digit;
            
//         }
//     }
//     console.log(i)
// }
//  console.log(maximum([1,2,3,4,5,6]));



// letter freequncy
let lol=`this is a test string this`
let letterfreq = (phrase)=>{
    let me={}
    for(const letter of phrase){
        if (letter in me){
            me[letter] = me[letter] + 1
        }else{
            me[letter] = 1
        }
        
    }
    return me
}

console.log(letterfreq(lol))

let wordfreq = (phrase)=>{
    let me={}
    let midhun = phrase.split(' ')
    for(const letter of midhun){
        console.log(letter)
        if (letter in me){
            me[letter] = me[letter] + 1
        }else{
            me[letter] = 1
        }
        
    }
    return me
}

console.log(wordfreq(lol))
