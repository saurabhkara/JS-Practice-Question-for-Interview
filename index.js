console.log("Welcome");

//Q1. Difference between map and forEach

let arr = [1,2,3,4,5,6];

let mapResult = arr.map((item,index, arr)=>{
    console.log(item);
    return item *2;
})

// console.log(mapResult);

let forEachResult = arr.forEach((item, index)=>{
    console.log(item)
})

// console.log(forEachResult);


//Q.2 differnce betwween null and undefined
console.log(typeof null);
console.log(typeof undefined);

//Q.3 
console.log(null == undefined);
console.log(null === undefined);


//Q.4 Event Delegation
document.querySelector('#products').addEventListener("click",(event)=>{
    console.log(event)
    if(event.target.tagName === 'LI'){
        console.log(event.target.id );
        window.location.href += '#' + event.target.id;
    }
})

//Q.5 flatten the array

let arr1 =[
    [1,2,3],
    [4,5,6],
    [7,[8,9],10],
]

// console.log(arr1.flat(1));


function flatArray(arr,finalArr){
   

    arr.map((item)=>{
        if(!Array.isArray(item)){
            finalArr.push(item);
        }else{
            flatArray(item,finalArr)
        }
    })
    return finalArr
}
let finalArr = [];
// console.log(flatArray(arr1, finalArr));


//Q.6  var vs let vs const

//function level vs block level scope
//hoists all but let and const cannot be accessed before initialization
//var can redeclared but let and const can not redeclared 




//Q.7


function abc(){
    for(var i=0;i<3;i++){

        

        function def(i){
            setTimeout(()=>{
                console.log(i);
            },i*1000);
        }
        def(i);
    }
}

// abc();
// 3 3 3
// 0 1 2



// Q.9 call, apply and bind method

function random(arg1, arg2){
    console.log('random function ',this.name, arg1, arg2, );
}

let obj = {
    name:'Saurabh'
}

// random.call(obj,'kumar', 'Good');
// random.apply(obj,['Great','Kumar']);
// random.bind(obj)("let's", "crack");



//Q.10 implement add(5)(7)(8)(2)()

function add(a){
    return (b)=>{
        return b? add(a+b): a;
    }
}




//Q.11 Polyfill for Compose method

function addFive(a){
    return a+5;
}

function subtractTwo(b){
    return b - 2;
}

function multiplyFive(c){
    return c * 5;
}



function Compose(...args){
    let final = 6;
    if(args.length){
        
        for(let i = args.length-1; i>=0; i--){
           final = args[i](final)
        }
    }
    return final
}

// console.log(Compose(addFive,subtractTwo,multiplyFive));
// functions.reduceRight();      ...   functions.pipe()

//Q. Implement Promise.all();


function oneFunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Success 1');
        },1000)
    })
}


function twoFunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Success 2s');
        },2000)
    })
}

// Promise.all([oneFunc(), twoFunc()]).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })



function promiseAll(promises){
    let result =[];
    return new Promise((resolve, reject)=>{
        promises.forEach((prom, index)=>{
            prom.then((res)=>{
                result.push(res);
                if(index == promises.length-1){
                    resolve(result);
                }
            }).catch((err)=>{
                reject(err);
            })
            
        })
    })
}

// promiseAll([oneFunc(),twoFunc()]).then((res)=>console.log(res));

