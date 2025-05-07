function checkPassword() {
    const input = document.getElementById('password').value;
    const key = atob("a2V5MjAyNQ==");

    if (input === key) {
        const finalLink = link();

        document.getElementById('ios-link').href = finalLink;
        document.getElementById('android-link').href = finalLink;

        document.getElementById('links').classList.remove('hidden');
    } else {
        alert(`Неверный пароль ${input}`);
    }
}

function link() {
    return `hiddify://install-sub/?url=https://con.x8net.world/hash/WDgxNjE3MCwxNzQ2NjA4MDgxlLtborACl2#YourSub`;
}
