// hoisting :- variable and function are hoisted which means their decleration is moved on the top of code
// var a;
//console.log(a);  
//therefor a is undefined because decleration moves on top but not initialization
// a = 12 ;

console.log(a);
var a = 12;

// types in js
//primitive and refrence 
// asi koi bhi value jise copy kr ne par real copy nahi ho ta , balki us ka refrence pass ho ta hai that was refrence, aur jis ka copy kr ne par real copy ho ja ta hai wo value primitive 
// refrence = {},[],() and all others are primitive

//primitive
var a = 12;
var b =  a;
b = b + 2;
console.log(a);
console.log(b); // change in b don't effect a

//refrence
var x = [1,2,3,4];
var y = x;
y.pop();
console.log(x);
console.log(y); // change in y effects x
// function
function createHelloWorld() {
    console.log('Hello World')
};
createHelloWorld()

// array - group of values
var m = [1,2,3,4,5,6,7];
console.log(m);
// push - add value at last
m.push(8);
console.log(m);
// pop - remove from last
m.pop();
console.log(m);
// unshift - add value at begning 
m.unshift(0);
console.log(m);
// shift - remove value from begining
m.shift();
console.log(m);
// splice - remove value using index 
// array_name.splice(index,kitni value hata ni hai)
m.splice(2,1);
console.log(m);