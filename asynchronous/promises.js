const new1 = new Promise((resolve,reject)=>{
    let isredy=[true,false][Math.floor( Math.random()*2)]
    isredy ? resolve(`console.log("dinner redy")`):reject(`console.log("this is not true")`)
}

)

    let me = async () => {
        let this1 = await new1
        console.log(new1)

    }
    me()
