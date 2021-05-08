var result = document.getElementById("result"),
	input = document.getElementById("input-poli"),
	btn = document.getElementById("btn");

btn.addEventListener('click', () => {
	let value = input.value.toLowerCase();
	let origin = value.replace(/[1-9!@#$%&*()_+=-\^\//\]\]]/g, "").split('');
	let reversed = origin.reverse().join('');

	console.log(value + "\n" + reversed);
	if (value === reversed) {
		result.innerText = "Это полиндром!"
	} else {
		result.innerText = "Это не полиндром :<"
	}
})
