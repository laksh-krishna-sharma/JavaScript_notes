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

