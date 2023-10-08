// js has two main version es5(old) and es6(new)
// var are in es5
// let and const is in es6

// var is function scoped - var apne parent function mai kahi bhi use ho sak ta hai
// function variable() 
// {
//     for (var i = 1; i < 11; i++) 
//     {
//         console.log(i);    
//     }
//     console.log(i);
// }
// variable();

// // let is braces scoped
// function abcd() 
// {
//     for (let i = 1; i < 11; i++) 
//     {
//         console.log(i);    
//     }
//     console.log(i); // give an error 
// }
// abcd();
// kuch features jo js mai nahi hai but fir bhi wo use kr le sak te hai window se , window ek features ka box ho ta hai given by browser
// var adds itself to window object and let , const don't add
var a = 1;
let b = 2;
// function chl te he ek imignary container ban ja ta hai jisa exicution context bol te hai jaha function ka code execute ho ta hai
// exicution context ke andar 3 chiz ho ti hai :
// 1) variable
// 2) parent function ke andar jitne function ho te hai
// 3) function ka lexical enviornment
function efgh() 
{
    var x = 2;
    
    function ijk()
    {
        var y = 3;
    } 
}
// function efgh ka ek exicution context bana jis ke andar x hai aur function ijk hai 
// jab hum efgh ko call kre ge to wo x ko of function ijk ko he acess kr sak ta hai ijk ke andar jo y hai us ko nahi ise he lexical enviornment bol te hai 
// lexical enviornment scope and scope chain ko hold kr ta hai matlab function kya acess kr sak ta hai aur kya acess nahi kr sak ta 
// to finally function efgh ka ek exicution context bana jis ke andar x hai aur function ijk hai aur lexical enviornment hai 

// how to copy refrence value
// spread operator use kr ke that is posible 
// spread operatoe = ... 
var arrayA = [1,2,3,4,5];
var arrayB = [...arrayA]; //arrayB mai arrayA ki value copy to hui hai but ab arrayB mai change kr ne se arrayA mai koi farak nahi pade ga

arrayB.pop();
console.log(arrayB);
console.log(arrayA);
// js mai kusc bhi likho wo 2 mai se kisi ek se he blong kr ta hai which is thuthy and falsy
// falsy value = 0 , false , undifined , NaN , null , document.all 
// baki sab truthy value ho ti hai 

// forEach loop array mai use ho ta hai
arrayA.forEach(function(val) {
    console.log(val+2);
})
// forEach array ki temprary copy par operation kr ta hai jis se array hamesha same reha ta hai

// forin loop object mai use ho ta hai 
var obj = {
    name : "laksh",
    age : 19,
    city : "indrapuram"
}
for (var key in obj)
{
    console.log(key,":",obj[key]);
}
// delete element from object
delete obj.age;
for (var key in obj)
{
    console.log(key,":",obj[key]);
}

// first class function
// js mai function = first class function ho te hai to matlab hum function ko variable mai bhi store kr sak te hai
function xyz(a)
{
    a()
}
xyz(function(){console.log("hello");});

// in js array is not a array it's a object
let f = [1,2,3,4,5,6,7,8,9];
let o = {};
console.log(typeof(o));
console.log(typeof(f));
console.log(Array.isArray(f));
console.log(Array.isArray(o)); 