
// ** otáčení trojúhelníků ** //

let arrows = document.getElementsByClassName("arrow");
let menuLis = document.getElementsByClassName("menuLi");
var timer;

for (let i = 0; i <= menuLis.length; i++) {

  menuLis[i].addEventListener('mouseenter', function(e) {
    arrows[i].classList.add('animated');
    timer = setInterval(() => {
        arrows[i].classList.toggle("animated");
    }, 1000);
  })

  menuLis[i].addEventListener('mouseleave', function(e) {
    clearInterval(timer);
    arrows[i].classList.remove('animated');
	});
}
