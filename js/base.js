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


/* closing and opening sidebar */


const navlinks = document.getElementById('navList');
const closingIcon = document.getElementById('closingIcon');
const openingIcon = document.getElementById('openingIcon');

let timeout;
var lastWidthChange = 0;

/* sidebar opening and closing */

openingIcon.addEventListener('click', function() {
    navlinks.style.display='block';
    timeout = setTimeout(slideIn, 20);

})

closingIcon.addEventListener('click', function() {
    navlinks.style.right= "-200px";
    timeout = setTimeout(slideOutTerminator, 1000);
})

function slideIn() {
    navlinks.style.right= '0';
}

function slideOutTerminator() {
    navlinks.style.display='none';
}

/* sidebar display after enlarge */

window.addEventListener('resize', displayMenuAfterEnlarge);

function displayMenuAfterEnlarge() {
    /* execute only after 0.2 s */
    if(Date.now() - lastWidthChange > 200) {
        /*display menu after crossing width 1300px */
        if (window.innerWidth > 900) {
            navlinks.style.display='block';
        }
        lastWidthChange = Date.now();
    }
}
