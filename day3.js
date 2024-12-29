//////callback hell
function a1(callback){

    setTimeout(()=>{

        console.log("a1");
        callback()
    },2000);
   
}

function a2(callback){

    setTimeout(()=>{

        console.log("a2");
       callback()
    },2000);
   
}
function a3(){

    console.log("a3");
}

// a1(a2(a3))
a1(() => a2(a3));


// a1(a2);


//////promise 


var promise  = new Promise((resolve,reject)=>{

   if(3>2)
   {
    resolve("greater");
   }else{
    reject("lesser");
   }
});

promise.then((value)=>{console.log(value)})
.catch((error)=>{console.log(error)});


////// another promise 

function a1(){
    return new Promise((res,rej)=>{

        if(5>5)
            {
             res("greater");
            }else if(5==5){
                res("equal");

            }
            else{
             rej("lesser");
            }

    })
}

a1().then((value)=>{console.log(value)}).catch((error)=>{
    console.log(error)
    
}
);

////////////////////



// function aa1(){
//     return new Promise((res,rej)=>{

//         if(7>5)
//             {
//              res("greater");
//             }
//             else{
//              rej("lesser");
//             }

//     })
// }

// function aa1(){
//     return new Promise((res,rej)=>{

//         if(3>5)
//             {
//              res("greater");
//             }
//             else{
//              rej("lesser");
//             }

//     })
// }


// aa1().then((value)=>{console.log(value)});aa2()
// .catch((error)=>{ console.log(error)});


///////////////

function a11(){
    return new Promise((res,rej)=>{

        if(5<3)
            {
             res("g");
            }
            else{
             rej("l");
            }

    })
}
function a12(){
    return new Promise((res,rej)=>{

        if(5>2)
            {
             res("g");
            }
            else{
             rej("l");
            }

    })
}
function a13(){
    return new Promise((res,rej)=>{

        if(5==5)
            {
             res("g");
            }
            else{
             rej("l");
            }

    })
}

// async function dog()
// {
//     try{
//         let [dog1,dog2,dog3] = await Promise.all([a11().a12(),a13()]);
//         console.log(dog1);
//         console.log(dog2);
//         console.log(dog3);
//     }catch(error){
//         console.log(error)

//     }
// }
async function dog() {
    try {
        
        let [dog1, dog2, dog3] = await Promise.all([a11(), a12(), a13()]);
        console.log(dog1); 
        console.log(dog2); 
        console.log(dog3); 
    } catch (error) {
        console.log(error); 
    }
}

dog();





