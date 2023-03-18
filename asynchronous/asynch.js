///rules for using async/await
/// it should be in a function
///must use a keyword async
///
const getdog = async ()=>{
    const new1 = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await new1.json()
    console.log(data)

}
getdog()