"use strict"

let icon1=document.querySelector("#navbar .turnon")
let icon2=icon1.nextElementSibling
let navbar=icon1.parentNode
icon1.addEventListener("click",function(){
    icon2.classList.remove("deactive")
    icon1.classList.add("deactive")
    navbar.classList.remove("active")
})
icon2.addEventListener("click",function(){
    icon1.classList.remove("deactive")
    icon2.classList.add("deactive")
    navbar.classList.add("active")
})