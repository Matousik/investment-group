// ** slider u testimonials ** //

const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].addEventListener("click",function() {
  slide.style.transform = "translateX(0px)";
  for (let i = 0; i < 2; i++) {
    btn[i].classList.remove("active");
    
  }
  this.classList.add("active");
})
btn[1].addEventListener("click", function() {
  slide.style.transform = "translateX(-800px)";
  for (let i = 0; i < 2; i++) {
    btn[i].classList.remove("active");
    
  }
  this.classList.add("active");
})