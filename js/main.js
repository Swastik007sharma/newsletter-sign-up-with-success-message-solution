const subscribeButton = document.querySelector(".form__container__submit");
const email = document.querySelector(".form__container__input");
const error = document.querySelector(".form__container__email__error")
const success = document.querySelector(".success")
const form = document.querySelector(".form")


subscribeButton.addEventListener("click", verifyEmail);

function verifyEmail() {
	var value = email.value;
	var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (emailPattern.test(value)) {
		error.style.visibility = "hidden";
		form.style.visibility = "hidden";
		success.style.visibility = "visible";
	} else {
		error.style.visibility = "visible";
        email.style.color = "hsl(4, 100%, 67%)";
        email.style.borderColor = "hsl(4, 100%, 67%)"
        email.style.background = "rgba(255, 98, 87,0.5)"
	}
}


