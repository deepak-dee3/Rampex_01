function a()
{
    if(true)
    {
        let aa= 5;
        console.log(aa);

    }

}
a()

/////


let n = {

    name:["kamal","hari"],
    age:12,
    address : {
        city:"chennai"
    },
    number : function(){
        console.log("hi")
    },
}

n.number()


/////////

let student = new Object();

student.name = function()
{
    console.log("hello");
}




student.name()

//////Dom manipulation basics,callbacks,promises,asunc/await,spread and deconstructing operators , terinary ,arrow function 

//a++ ; a=a+1; 

let m=10;

console.log(m--);

//////

let q = 4 | 3;
console.log(q)

/////

let aq= 5;

if(aq%5==0)
{
    console.log("hello");
}else if(aq%3==0){
    console.log("hi");
    
}
else{
    console.log("hi hello")
}

/////

let apple = () =>
{
    console.log("apple");

}
apple()

///

let orange = (a,b) => {

    var c=a+b;
    return c;
}

console.log(orange(1,2))

////

let s = [1,2,3,4,5];
let ss = [...s];      ///spread operator copies the content from s and ss = a (is not same)

console.log(ss[0])

let sss = [6,7,8,9,10]

let s4 = [...s,...sss]
console.log(s4)

for(var f=0;f<10;f++)
{
    console.log(s4[f]);
}

////////////// rest operator

function restexample(...values)
{
    console.log(values);
}
function restexample(x,y,...values)
{
    console.log(values);
    console.log(x,values);
    console.log(x,y,values);
}
restexample(1,2,3,4,5)



let numbers = {

    num : [1,2,3,4,5,6]
}
let numberss = {...numbers.num}

function rest(...value)
{
    console.log(value)
}
rest(numbers.num)

rest(numberss.num)


////////////deconstructing operator

let l = [1,2,3,4,5,6]
let [ll,lll,llll,...lllll] = l;
console.log(lllll)

let de = {
    nums : [11,12,13,14,15,16,17],


}

let dec = de.nums;

let [decc,deccc,...decccc] = dec;

console.log(decc,decccc);


//////////callbacks

function dog(callbacks)
{
    setTimeout(()=>
    {
        console.log("jack the dog");
        callbacks();
    })//2 seconds delay
    
}

function cat()
{
    console.log("cat the rose");
}
dog(cat);



////////call back

function attendance(lunch)
{
    setTimeout(()=>{

        console.log("attendance is over");

        lunch(goingtohome);
    })
    
}
function lunch(goingtohome)
{
    setTimeout(()=>{

        console.log("lunch is over");
       // lunch(goingtohome);
       goingtohome();

      
    })

    
}
function goingtohome()
{
   setTimeout(()=>
{
    console.log("i am going to home")
    console.log("day completed")
})
    
}

attendance(lunch);
console.log("kin");



//////////promises

var promise = new Promise((resolve,reject) => {

    var present = 1;

    if(present>0)
    {
       //resolve("greater");
       console.log("greater");
       var promise2 = new Promise((res,rej)=>
    {
        var lunch =1;
        if(lunch>0)
        {
           
           // resolve("lunch completed");
           console.log("lunch completed");
           var promise3 = new Promise((rss,rjj)=>{

            var go_home = 0;

            

            if(go_home>0)
            {
                rss("went home");
            }
            else{
                rjj("not went");

            }
           });

           promise3.then(value=>{
            console.log(value)
           }).catch(er=>{
            console.log(er);
        })

           

        }
        else{
            reject("no lunch");
        }
    });
    promise2.then(value =>
        {
            console.log(value);
            
        }
        ).catch(error=>{
            console.log(error);
        }
        )
    }
    else{
        reject("lesser");
    }
}
);

promise.then(value =>
{
    console.log(value);
    
}
).catch(error=>{
    console.log(error);
}
)

//////////////////async and await
function lunch1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var present = 1;
            if(present>0)
            {
                resolve("Lunch is over");
            }
            else{
                reject("no lunch");
            }
        }, 1000); 
    });
}

lunch1().then((message) => {
    console.log(message);
    
});

function break1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var present = 1;
            if(present>0)
            {
                resolve("break is over");
            }
            else{
                reject("no break");
            }
        }, 1000); 
    });
}

break1().then((mess) => {
    console.log(mess);
    
});

async function all_call_here()
{
    let ach = await lunch1();
    console.log(ach);
    let ach1 = await break1();
    console.log(ach1);


}


/////callback example today work(day2)

function func1(func2)
{
    setTimeout(()=>{
         var name = "abc"

        console.log(`file ${name} is being processed`);
        
        func2(name,func3)
    },2000);
}

function func2(name)
{
    setTimeout(()=>{

        //console.log('get ${name}' )
       console.log(`file ${name} is got downloaded`);
       func3(name);
       

    },2000);
   

}


function func3(name)
{
    setTimeout(()=>{
        console.log(`file ${name} download completed`)
    },2000);
}

func1(func2);






