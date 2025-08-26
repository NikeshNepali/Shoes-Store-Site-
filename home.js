const shoes = document.querySelectorAll(".shoes");
const slider = document.querySelector(".sliderwrapper")
const slider2 = document.querySelector(".sliderwrapper2")

shoes.forEach((s,i)=>{
    s.addEventListener("click",()=>{
        slider.style.transform = `translateX(${-100*i}vw)`;
        slider2.style.transform = `translateX(${-100*i}vw)`;

        shoes.forEach((se)=>{
            se.style.textDecoration = "none"
        })
        s.style.textDecoration = "underline";
    })
})


const colors = document.querySelectorAll(".black");
const color2 = document.querySelectorAll(".blue");
let images = document.querySelectorAll(".nikeShoes1");

const imag = [ "img/air2.png","img/jordan2.png" ,"img/blazer2.png" ,"img/crater2.png" ,"img/hippie2.png"];
const imag2 = [ "img/air.png","img/jordan.png" ,"img/blazer.png" ,"img/crater.png" ,"img/hippie.png"];

color2.forEach((col,img)=>{
    col.addEventListener("click",()=>{
        images[img].src = imag[img];
    })
})
colors.forEach((col,img)=>{
    col.addEventListener("click",()=>{
        images[img].src = imag2[img] ;
    })
})

/* Size Selection */

const siz = document.querySelectorAll(".size");

siz.forEach((a,i)=>{
    a.addEventListener("click",()=>{

        siz.forEach((si)=>{
            si.style.backgroundColor = "white"
            si.style.color = "black"
        })
        a.style.backgroundColor = "black";
        a.style.color = "white";
    })
})

/* Closing Payment Show */

const close = document.querySelector(".close");
const blur = document.querySelector(".blur");

close.addEventListener("click",()=>{
    blur.style.visibility= "hidden";
})


const purchase1 = document.querySelectorAll(".purchase1");

purchase1.forEach((b,i)=>{
    b.addEventListener("click",()=>{
        blur.style.visibility = "visible"; 
    })
})


/* Input Search Bar */


/* const type = document.querySelector("#typehere")
const getInfo = document.querySelector("#GetInfo")

shoes.forEach((s,i)=>{
    getInfo.addEventListener("click",()=>{
        if(type===s[i]){
            slider.style.transform = `translateX(${-100*i}vw)`;
            slider2.style.transform = `translateX(${-100*i}vw)`;
        }
    })
}) */

