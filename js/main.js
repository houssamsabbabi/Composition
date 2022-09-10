let btn = document.querySelector(".icon"); 
let nav = document.querySelector(".navbar");

btn.addEventListener("click", ()=> {
    nav.classList.toggle("the-toggler");
})



// slider imgs 

let img = document.querySelector(".slider-img-container img"); 
let balls = document.querySelectorAll(".balls li");
let nextSlid = document.querySelector(".next"); 
let prevSlid = document.querySelector(".before"); 

let totalImgs = 5;
let i=0; 
let time= 5000;

function imgSlider(){
    if(i == totalImgs){
        i =1;
    } else {
        i++;
    }
  img.src = "/imgs/img-0"+i+".png"; 
  setTimeout(removeActive(), time);
  setTimeout("imgSlider()", time); 
  setTimeout(addActive(), time);
}

function removeActive(){
    balls.forEach((ball)=>{
        ball.classList.remove("active"); 
    })
}

function addActive(){
    balls[i-1].classList.add("active");
}

window.onload = imgSlider;


nextSlid.addEventListener("click", ()=>{
    if(i === totalImgs) {
        i=1;
    } else {
        i++;
    }
    removeActive();
    balls[i-1].classList.add("active");
    img.src = "/imgs/img-0"+i+".png"; 
})

prevSlid.addEventListener("click", ()=>{
    if(i === 1) {
        i=5;
    } else {
        i--;
    }
    removeActive();
    balls[i-1].classList.add("active");
    img.src = "/imgs/img-0"+i+".png"; 
})

balls.forEach((ball)=>{
    ball.addEventListener("click", ()=>{
        removeActive();
        ball.classList.add("active"); 
        img.src = "/imgs/img-0"+ball.dataset.number+".png"; 
    })
})






