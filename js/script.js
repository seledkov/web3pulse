/* let test = '6/3=?';

let answer = prompt(test);
// console.log("her years" answer)

if (3 * answer == 6) {
	console.log('yes')
}
else {
	console.log('no no no')
} */
alert('Давай проверим как ты умеешь умножать числа');
let firstNumber = prompt('введите первое число'),
	secondNumber = prompt('введите второе число');

let answer = firstNumber * secondNumber;
let userAnswer = prompt('введите ответ');
if (answer == userAnswer) {
	alert('верное решение!')
} else {
	alert('неверное решение!')
	let nextStep = confirm('хочешь узнать ответ?');
	if (nextStep == true) {
		alert('правильный ответ' + answer)
	} else {
		alert('ну и иди ннахер')
	}
};

/* for (let i = 1; i < 8; i++) {
	console.log(i);
} */