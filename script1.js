//word vs keyword

// Hello, buddy, is good = word {which doesn't have meaning}
// for, if, else, var, let = keyword {which has meaning}

// var a = 1;

// while(a<11){
//     a++;
// }

// console.log("Hello");

// var a = 12;

// let b = 11;

// setTimeout(function(){
//     console.log("Run");
// }, 2000); 

var bulb = document.querySelector("#bulb")
var a = document.querySelector("button")
var b = 0

a.addEventListener("click", function(){
    if(a == 0){
        bulb.style.backgroundColor = "yellow" 
        a = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        a = 0
    }
})

var hi = document.querySelector("h1")

    hi.addEventListener("click", function(){
    hi.innerHTML = "HACKED"
    hi.style.color = "red"
    // hi.style.backgroundColor = "yellow"
})
// bulb.style.backgroundColor = "yellow"