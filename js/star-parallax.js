const container = document.getElementById('star-container')
const numStars = 600
let stars = []

function randomBetween(min, max) {
	return Math.random() * (max - min) + min
}

// Генерация звёзд с относительными координатами
function generateStars() {
	stars = []
	container.innerHTML = ''
	for (let i = 0; i < numStars; i++) {
		const star = document.createElement('div')
		star.classList.add('star')
		if (i < numStars / 2) {
			star.classList.add('star-plus')
		} else {
			star.classList.add('star-minus')
		}
		const size = randomBetween(0.5, 2.2)
		star.style.width = `${size}px`
		star.style.height = `${size}px`
		star.style.background = Math.random() < 0.88 ? '#fff' : '#bcdfff'
		star.style.opacity = randomBetween(0.6, 1)
		// Сохраняем относительные координаты (от 0 до 1)
		const relX = Math.random()
		const relY = Math.random()
		star.dataset.relX = relX
		star.dataset.relY = relY
		// Индивидуальная скорость параллакса
		star.setAttribute('data-speed', randomBetween(2, 40))
		container.appendChild(star)
		stars.push(star)
	}
	positionStars()
}

// Расставляем звёзды по контейнеру
function positionStars() {
	const w = container.offsetWidth
	const h = container.offsetHeight
	stars.forEach(star => {
		const x = star.dataset.relX * w
		const y = star.dataset.relY * h
		star.style.left = `${x}px`
		star.style.top = `${y}px`
		star.style.transform = '' // сброс параллакса при ресайзе
	})
}

// Параллакс-эффект
function parallax(event) {
	const w = window.innerWidth
	const h = window.innerHeight
	let mouseX, mouseY
	if (event.touches && event.touches.length > 0) {
		mouseX = event.touches[0].clientX
		mouseY = event.touches[0].clientY
	} else {
		mouseX = event.clientX
		mouseY = event.clientY
	}
	stars.forEach(star => {
		const speed = star.getAttribute('data-speed')
		let dx = ((mouseX - w / 2) * speed) / 500
		let dy = ((mouseY - h / 2) * speed) / 500
		if (star.classList.contains('star-minus')) {
			dx *= -1
			dy *= -1
		}
		star.style.transform = `translate(${dx}px, ${dy}px)`
	})
}

// Генерируем и позиционируем звёзды при загрузке и изменении размера окна
window.addEventListener('resize', positionStars)
window.addEventListener('DOMContentLoaded', generateStars)

// Параллакс-эффект при движении мыши
window.addEventListener('mousemove', parallax)
// Для мобильных устройств — эффект по касанию
window.addEventListener('touchmove', parallax)
