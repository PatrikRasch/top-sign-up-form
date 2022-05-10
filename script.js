const password1 = document.getElementById("password");
const password2 = document.getElementById("password2");
const message = document.getElementById("message");

let passwordCheck = function () {
    password1.classList.remove("mismatch")
    password2.classList.remove("mismatch")
    message.innerText = '';
    form.addEventListener("submit", (e) => {
        if (password1.value == password2.value) {
            document.getElementById('message').style.color = 'green';

        } else {
            message.style.color = 'red';
            message.innerText = '* Passwords do not match';
            password1.classList.add("mismatch");
            password2.classList.add("mismatch");
            e.preventDefault()
        }
    })
}
