function checkPassword() {
    const input = document.getElementById('password').value;
    const key = atob("a2V5MjAyNQ==");

    if (input === key) {
        document.getElementById('links').style.display = 'block';
    } else {
        alert('Неверный пароль');
    }
}

function checkPasswordKey() {
    const input = document.getElementById('password').value;
    const key = atob("V0R4MTYxNzMwLDE3NDY2MDgwOGd4bC5MZ2Fzb3I=");

    if (input === key) {
        document.getElementById('links').style.display = 'block';
    } else {
        alert('Неверный пароль');
    }
}
