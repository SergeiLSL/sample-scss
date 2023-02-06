"use script"

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = "img/nav-close.svg";
	} else {
		navBtnImg.src = "img/nav-open.svg";
	}
}


// https://www.youtube.com/watch?v=PoJaRi7Ug7Q&t=5s   time 01:52
// https://cdnjs.com/libraries/aos
// https://michalsnik.github.io/aos/

AOS.init({
	//disable: ('mobile') //отключим на мобилках
});






