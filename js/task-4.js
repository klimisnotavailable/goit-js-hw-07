"use strict"


const form = document.querySelector("form.login-form");
const loginInput = form.querySelector("input[name=email]");
const passwordInput = form.querySelector("input[name=password]");        

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (passwordInput.value.trim() === "" || loginInput.value.trim()  === "") {
        window.alert("All form fields must be filled in");
    }
    else {
        console.log( {
            email: loginInput.value,
            password: passwordInput.value
        })
        form.reset()
    }
})

