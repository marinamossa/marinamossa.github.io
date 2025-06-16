//мобильное меню и запрет скролла контента при его открытии
document.querySelector('#burger').onclick = function () {
	if (document.querySelector('.popup-open')) {
	} else {
		document.getElementById('header_menu').classList.toggle('burger-click')
		document.getElementById('burger').classList.toggle('active')
		document.getElementById('body').classList.toggle('fixed')
	}
}

// добавление бордера хедеру при скролле
let scrollpos = window.scrollY

const header = document.querySelector('.main-header__inner')
const scrollChange = 1

const add_class_on_scroll = () => header.classList.add('header-scroll')
const remove_class_on_scroll = () => header.classList.remove('header-scroll')

window.addEventListener('scroll', function () {
	scrollpos = window.scrollY

	if (scrollpos >= scrollChange) {
		add_class_on_scroll()
	} else {
		remove_class_on_scroll()
	}
})

//popup и запрет скролла контента

document.querySelector('#lets-talk').onclick = function () {
	document.querySelector('.lets-talk-popup').classList.add('popup-open')
	document.getElementById('body').classList.add('fixed')
}

document.querySelector('#contacts').onclick = function () {
	document.querySelector('.lets-talk-popup').classList.add('popup-open')
	document.getElementById('body').classList.add('fixed')
}

document.querySelector('#close-popup').onclick = function () {
	document.querySelector('.lets-talk-popup').classList.remove('popup-open')
	document.getElementById('body').classList.remove('fixed')
}

//scroll-top button

const offset = 100
const scrollUp = document.querySelector('.scrool-top')
const getTop = () => window.pageYOffset || document.documentElement.scrollTop

// onScroll
window.addEventListener('scroll', () => {
	if (getTop() > offset) {
		scrollUp.classList.add('scroll-btn-show')
	} else {
		scrollUp.classList.remove('scroll-btn-show')
	}
})

// click
scrollUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

//click by menu link

const menuLink = document.querySelectorAll('.menu__link')

for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].addEventListener('click', function () {
		document.getElementById('header_menu').classList.remove('burger-click')
		document.getElementById('burger').classList.remove('active')
		document.getElementById('body').classList.remove('fixed')
	})
}

//parallax
function parallax(event) {
	this.querySelectorAll('.parallax-shape').forEach(shape => {
		let speed = shape.getAttribute('data-speed')
		shape.style.transform =
			`translateX(${(event.clientX * speed) / 500}px)` +
			`translateY(${(event.clientY * speed) / 500}px)`
	})
}

document.addEventListener('mousemove', parallax)

function parallaxMinus(event) {
	this.querySelectorAll('.shape-minus').forEach(shape => {
		let speed = shape.getAttribute('data-speed')
		shape.style.transform =
			`translateX(${(event.clientX * speed) / -500}px)` +
			`translateY(${(event.clientY * speed) / -500}px)`
	})
}

document.addEventListener('mousemove', parallaxMinus)
console.log('speed=' + speed)
