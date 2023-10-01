// js has two main version es5(old) and es6(new)
// var are in es5
// let and const is in es6

// var is function scoped - var apne parent function mai kahi bhi use ho sak ta hai
function variable() 
{
    for (var i = 1; i < 11; i++) 
    {
        console.log(i);    
    }
    console.log(i);
}
variable();

// let is braces scoped
function abcd() 
{
    for (let i = 1; i < 11; i++) 
    {
        console.log(i);    
    }
    console.log(i); // give an error 
}
abcd();