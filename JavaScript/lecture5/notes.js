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

// PROTOTYPE -> jab bhi hum ek object bana te hai to us kuch helper properties mill ja te hai automaticaly ban te he (built in functions for every data type in JS)

// PROTOTYPE INHERITANCE -> ek chuld obj pe parent obj ki sari proporties ho na + kuch or extra proporties bhi ho na through prototype
var human = {
    canWalk: true,
    canTalk: true,
    canFly: false
};
var coder = {
    canCode: true
};
coder.__proto__ = human;
// now coder can also access properties of human 
console.log(coder.canFly);


// ek function jo object ke andar ho ussa method bol te hai
// THIS keyword -> global aur local variable mai this ki value 'window' ho ti hai
// lekin method mai this ki value 'object' ho ti hai aur method mai this keyword object ko reffer kr ta hai


// CALL , APPLY , BIND -> agar koi ek function aur ek object hai or hume function ke andar ke this ki value ki jagha wo object as value pass kr na hai tab in mai se kisi ka use kr sak te hai
function abc(val1,val2,val3) {
    console.log(this,val1,val2,val3);
}
abc();
var obj5 = {
    name: 'laksh'
};
abc.call(obj5,1,2,3);
abc.apply(obj5,[4,5,6]);
var bindfun = abc.bind(obj5,7,8,9); //bind -> function aur object ko combine kr ke ek naya function bana de ga or isa store kr na pad ta hai
bindfun();

// PURE FUNCTION -> jo same input ke liya same output return kre and global variable ki value andar change/update na kre 
// IMPURE FUNCTION -> jo same input ke liya same output return na kre and global variable ki value andar change/update kre 