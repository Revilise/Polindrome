var h2 = document.getElementById('title');
var p = document.getElementById('result');

var str ='Полиморфизм: ';
h2.textContent = str + localStorage.settings;
var answer = 'Ответ: ';
p.textContent = answer + localStorage.result;

function reaction() {
	var word = prompt("Введите что-то, что может быть полиморфизмом");
	localStorage.setItem('settings', word);
	h2.textContent = str + localStorage.settings;

	const re = checkPoli(word);
	var sum = 0;

	for (let i = 0; i< re.length; i++) {
		console.log(re[i] + ' | ' + re.reverse()[i]);
		if (re[i] === re.reverse()[i]) {
			sum++;
		} else {
			sum = 0;
		}
	}
	sum === re.length ? result = 'да!' : result = 'нет :с';
	localStorage.setItem('result', result);
	p.textContent = answer + localStorage.result;
}

function checkPoli(string) {
	const Reg = /[0-9!@#$%\^&*()_"№;:?=+/]/g;

	var rubbish = [' ']
	rubbish.push(string.match(Reg)); // массив с мусором
	rubbish = rubbish.map(item => String(item)); //мусор теперь строка //try split
	string = string.split(''); //разобранная исходная строка

	console.log(rubbish);
	if (rubbish[1] !== "null") {
		rubbish.shift(0);
	}

	rubbish = rubbish[0].split(',')
	console.log(rubbish);
	function inArray(elem, arr) {
		return arr.indexOf(elem) !== -1;
	}

	let string2 = [];

	for (let elem of string) {
		if (!inArray(elem, rubbish)) {
			string2.push(elem.toLowerCase());
		}
	}
	console.log(string2);
	return string2;
}
