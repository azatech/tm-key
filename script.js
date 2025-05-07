function checkPassword() {
    const input = document.getElementById('password').value;
    const key = atob("dG0tMTk5MQ==");

    if (input === key) {
        document.getElementById('links').style.display = 'block';
    } else {
        alert('Неверный пароль');
    }
}
