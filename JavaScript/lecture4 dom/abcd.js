// // DOM => document object modle

// // their are 4 pillers of DOM 

// // 1) selection of element 
// var a = document.querySelector('h1')
// console.log(a)

// // 2) changing html 
// a.innerHTML ='DOM Changed'

// // 3) changing css
// a.style.backgroundColor='black'
// a.style.color='red'

// // 4) event listener
// a.addEventListener("click",function(){
//     a.innerHTML = 'DOM once again'
//     a.style.backgroundColor='yellow'
//     a.style.color='black'
// })

let a = document.querySelector("#bulb")
let b = document.querySelector("button")

var c = 0
b.addEventListener("click",function(){
    if (c == 0) {
        a.style.backgroundColor = 'yellow'
        c = 1
        b.innerHTML = 'OFF'
    }
    else{
        a.style.backgroundColor = 'transparent'
        c = 0
        b.innerHTML = 'ON'
    }
    
})

// agar 3 h1 hai to document.querySelector bs first wale ko select kre ga sab ko ek sath selact kr ne ke liya document.querySelectorAll use kr sak te hai 

// id se select kr ne ke liya document.getElementById use kr sak te hai
// class se select kr ne ke liya document.getElementByClass use kr sak te hai

// innerHTML mai change tag 1 show ho ga 
var z = document.querySelector('h1')
z.innerHTML ='<h1>change tag 1</h1>'

// textContent mai <h2>change tag 2</h2> show  ho ga
var x = document.querySelector('h2')
x.textContent = '<h2>change tag 2</h2>'