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