// ДОБАВЛЕНИЕ НОМЕРА ПРОИЗВЕДЕНИЯ ПО ОЧЕРЕДИ
const arrayOfCompositions = document.querySelectorAll('.programm__point');
arrayOfCompositions.forEach((el, index) => {
	el.innerHTML = (index + 1.) + '. ' + el.innerHTML;
})