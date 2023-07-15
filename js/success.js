const email = localStorage.getItem("useremail")
console.log(email)
const successEmail = document.querySelector(".success__para span");
successEmail.innerText = email;