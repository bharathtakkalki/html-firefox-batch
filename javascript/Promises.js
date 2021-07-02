//Promises




function calculateServer(x,y,operation ,callBack){
    setTimeout(()=>{
        switch (operation) {
            case "ADD":
                callBack(x+y,(callBack)=>{
                    console.log("Now Execute This")
                    callBack()
                })
                break;
            case "SUBTRACT":
                callBack(x-y)
                break;
            default:
                break;
        }
    },3000)
}


function callBackForServer(result,callBack){
    console.log("I have got the result=",result)
    console.log("Im executing My statements")
    console.log("Im calling callback here")
    callBack(()=>{
        console.log("Im excuted at third level")
    })

}



function greetUser(){
    console.log("Welcome to the system, Im fetching result for you")
}

// calculateServer(10,20,"ADD",callBackForServer)
// greetUser()


// var timeout = setTimeout(()=>{
//     console.log("Im executing after 5 seconds")
// },5000)

// var interval = setInterval(()=>{
//     console.log("Im repeated every 7 seconds", new Date())
// }, 1000)

// clearInterval(interval)
// clearTimeout(timeout)

function waitAndCalculate  (x,y,operation) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            switch (operation) {
                case "ADD":
                    resolve(x+y)
                    break;
                case "SUBTRACT":
                    resolve(x-y)
                    break;
                default:
                    reject("Invalid Operation")
                    break;
            }
        },0)
    })
}

waitAndCalculate(20,30,"")
.then(result =>{
    console.log(result)
})
.catch(error =>{
    console.log(error)
})

waitAndCalculate(10,40,"ADD")
.then(result => 
    console.log(result))


waitAndCalculate(50,30,"SUBTRACT").then(result => console.log(result))

greet()

function greet(){console.log("Greetings!")}



