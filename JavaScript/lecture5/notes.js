// Higher order functions -> ek aisa function jo accept ya return kre ek function
// return ek function kre
function abcd(params) {
    return function() {
    }
}
// ya fir us ke argument mai function pass kr de 
abcd(function(){});


// constructer function -> jab bhi aisa koi moka mille jab bhot sare variables ko same properties de ne pda tab is ka use kr ne hai 
function biscuitMold(color) {
    this.width = 12;
    this.height = 22;
    this.color = color;
    this.taste = 'sweet';
}
var bis1 = new biscuitMold('brown');
var bis2 = new biscuitMold('black');
var bis3 = new biscuitMold('green');

console.log(bis1);
console.log(bis2);
console.log(bis3);

// JS mai functions FIRST CLASS FUNCTIONS variable ke jisa treat ho te hai matlab funtctions ko store kr sak te hai kisi or variable mai us function ko he as a argument pass kr sak te hai 

// NEW keyword -> blank object bana do mostly new ke sath function fun ho ga to function mai jaha jaha this likha ho to usa key value pair bana do

// iife -> immediatly invoked function expression
// iife ek function chlane ka method hai jis se hum private value bana te hai
var ans = (function () {
    var privateval = 12;

    return{
        getter:function() {
            console.log(privateval);
        },
        setter:function(val){
            privateval = val;
        }
    }
})()
// the value of privateval can't be accessed directly
ans.getter();
ans.setter(24);
ans.getter();
