const subscribeButton = document.querySelector(".newsletter__container__submit");
const email = document.querySelector(".newsletter__container__input");
const error = document.querySelector(".newsletter__container__email__error")
const success = document.querySelector(".success")
const newsletter = document.querySelector(".newsletter")
const successEmail = document.querySelector(".success__para span").innerText



subscribeButton.addEventListener("click", verifyEmail);

function verifyEmail() {
    var value = email.value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(value)) {
        changesOnSuccess()
    } else {
        changesOnError()
    }
}

function changesOnError() {
    error.innerText = "Valid email required";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)"
    email.style.background = "rgba(255, 98, 87,0.5)"
}

function changesOnSuccess() {
    newsletter.style.visibility = "hidden";
    success.style.visibility = "visible";
    successEmail = value;
}


