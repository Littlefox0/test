document.addEventListener("DOMContentLoaded", e => {

	document.querySelector(".add").addEventListener("click", e => {
		const input = document.querySelector("input")
		const color = input.value;
		document.querySelector(".bounce").style.background = color;
		console.log(input.value);
		console.log(e.currentTarget);
	})
})