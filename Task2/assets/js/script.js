"use strict"

let number1=document.querySelector(".number1");
let number2=number1.nextElementSibling;
let plus=document.querySelector(".transactions button:nth-child(1)")
let minus=plus.nextElementSibling;
let multiply=minus.nextElementSibling;
let divide=multiply.nextElementSibling;
let result=plus.parentNode.nextElementSibling;

plus.addEventListener("click",function(){
    result.value=parseInt(number1.value) + parseInt(number2.value);
    number1.value=""
    number2.value=""
})

minus.addEventListener("click",function(){
    result.value=parseInt(number1.value) - parseInt(number2.value);
    number1.value=""
    number2.value=""
})

multiply.addEventListener("click",function(){
    result.value=parseInt(number1.value) * parseInt(number2.value);
    number1.value=""
    number2.value=""
})

divide.addEventListener("click",function(){
    result.value=parseInt(number1.value) / parseInt(number2.value);
    number1.value=""
    number2.value=""
})