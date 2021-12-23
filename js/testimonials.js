// ** slider u testimonials ** //

const wrapper = document.querySelector(".testimonial-wrapper");
const indicators = [...document.querySelectorAll(".testimonial-indicators button")];

let currentTestimonial = 0;

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove("active");
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add("active");
        currentTestimonial=i;
    })
});

//**  sidebar responsive closing and opening  **//

const navlinks = document.getElementById('navList');
const closingIcon = document.getElementById('closingIcon');
const openingIcon = document.getElementById('openingIcon');

openingIcon.addEventListener('click', function() {
    navlinks.style.right= '0';
})

closingIcon.addEventListener('click', function() {
    navlinks.style.right= "-200px";
})