function checkPassword(form1) {
    password1 = form1.password.value;
    password2 = form1.password2.value;

    if (password1 != password2) {
        alert("\nPassword did not match: Please try again.")
        return false;
    }
    else {
        return true;
    }
}