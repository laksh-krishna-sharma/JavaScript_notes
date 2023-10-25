// DOM => document object modle

// their are 4 pillers of DOM 

// 1) selection of element 
var a = document.querySelector('h1')
console.log(a)

// 2) changing html 
a.innerHTML ='DOM Changed'

// 3) changing css
a.style.backgroundColor='black'
a.style.color='red'

// 4) event listener
a.addEventListener("click",function(){
    a.innerHTML = 'DOM once again'
    a.style.backgroundColor='yellow'
    a.style.color='black'
})