"use strict"


//sidebar

// let sidebar=document.querySelector(".sidebar");

// let closeicon=document.querySelector(".sidebar .close-icon");

// let openIcon=document.querySelector(".sidebar .open-icon")

// openIcon.addEventListener("click",function(){
//     sidebar.classList.remove("hide-sidebar")
//     closeicon.classList.remove("d-none")
//     this.classList.add("d-none")
// })

// closeicon.addEventListener("click",function(){
//     sidebar.classList.add("hide-sidebar")
//     openIcon.classList.remove("d-none")
//     this.classList.add("d-none")
// })



// let h1=document.querySelector("h1")

// let span=document.querySelector("span")

// h1.parentNode.parentNode.parentNode.parentNode.style.backgroundColor="red";

// console.log(h1.nextElementSibling.firstElementChild.innerText);

// console.log(h1.previousElementSibling);

// console.log(h1.nextElementSibling.children[1].innerText);

// console.log(span.closest(".item").children[0]);

// let elems = span.closest(".item".children);
// console.log(elems);

// for (const elem of elems) {
//     elem.style.color = "blue"
// }


// let elem = document.querySelector(".apple ul li:last-child a")

// elem.parentNode.parentNode.parentNode.previousElementSibling.style.backgroundColor = "red";

// elem.closest(".apple").previousElementSibling.style.backgroundColor = "blue";

// let button=document.querySelector("button")
// button.addEventListener("click",function(){
//     this.previousElementSibling.style.backgroundColor = "blue"
// })


let input = document.querySelector("#blog input");

// input.addEventListener("blur",function(){
//     this.value = "";
// })

// input.addEventListener("focus",inputEvent)

// input.addEventListener("change",inputEvent)

// input.addEventListener("keydown",inputEvent)

// input.addEventListener("keyup",inputEvent)

// input.addEventListener("keypress",inputEvent)

// function inputEvent(){
//     console.log("input event");
// }






input.addEventListener("click",function(e){

    if(event.key === "Enter"){

        event.preventDefault();

        document.querySelector(".test").click();
    }
})

document.querySelector(".test").onclick = function(){
    alert("trigged")
}



