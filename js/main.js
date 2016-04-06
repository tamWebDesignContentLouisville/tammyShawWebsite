
function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
	var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
	prlx_lyr_1.style.top = 710 -(window.pageYOffset / 4)+'px';
	prlx_lyr_2.style.top = 1420 -(window.pageYOffset / 4)+'px';
}
window.addEventListener("scroll", parallax, false);

$( document ).ready(function() {
	parallax();
	
};
