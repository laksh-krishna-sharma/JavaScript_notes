// sync aur async kya ho ta 

// sync matlab jab tak ek command pura na ho dusra nahi ho ga  

// async matlab sare kaam shuru kr do jo kaam phela ho ja aya us ka jawab de de na 

// agar code mai kahi bhi setTimeout, setInterval, Promise, fetch, axios, ya XMLHttpRequest likkha hua milla to wo async js hai 

// setTimeout(callbackFunction,timeInMs)
// callback function hamesha async code mai answer aa ne ke baad chl ta hai 

console.log("hi");
setTimeout(function () {
    console.log("hi after 2 second");
},2000)

// js async nahi hai 
// js is a singlethread language  
// sync code main stack mai ja ta hai aur async code side stack mai ja ta hai 
// jab main stack mai sara code exicute ho ja ta hai fir check kr te hai ki jo async code side stack mai hai wo complete hua ki nahi agar complete hua to us code ko EVENT LOOP se main stake mai move kr ke exicute kr de te hai
 

// promise
let ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);

    if (n<5) 
    {
        return res();
    }
    else
    {
        return rej();
    }
})
ans
.then(function () {
    console.log("below");
})
.catch(function () {
    console.log("above");
})