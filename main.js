let submit = document.querySelector(".submit");
let hello = document.querySelector(".hello");
let thankYou = document.querySelector(".thank-you");
let liAll = document.querySelectorAll("li")
let span =document.querySelector(".span");
console.group(liAll);
liAll.forEach(li=>{
    li.addEventListener("click",(e)=>{
        span.textContent= li.textContent;
    })
})

function onclickSubmit(){
    if (span.textContent !==""){
        hello.style.display = "none";
        thankYou.style.display = 'block';
    }
};