/*document.addEventListener("DOMContentLoaded", e => {

	document.querySelector(".add").addEventListener("click", e => {
		const input = document.querySelector("input")
		const color = input.value;
		document.querySelector(".bounce").style.background = color;
		console.log(input.value);
		console.log(e.currentTarget);
	})
})*/
document.addEventListener("DOMContentLoaded", e => {
	document.querySelector(".tk").addEventListener("click", e => {
		let message = '';
		let login = document.querySelector(".puk").value;
			
			if (login == 'Привет') {
			  message = 'Привет';
			} else if (login == 'Пока') {
			  message = 'Пока';
			} else if (login == '') {
			  message = 'Придумай что по лучше :Р';
			} else if (login == '%') {
			  message = 'Pan';
			} else {
			  message = "Puk"
			}
		document.querySelector(".bot").innerText = message;
		console.log(message);
		console.log(e.currentTarget);

	})
})
