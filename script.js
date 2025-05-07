function checkPassword() {
    const input = document.getElementById('password').value;
    const key = atob("a2V5MjAyNQ=="); // "key2025"

    if (input === key) {
        const finalLink = link();

        const linksDiv = document.getElementById('links');
        linksDiv.innerHTML = `
            <a href="${finalLink}">📱 Установить Hiddify (iOS)</a>
            <a href="${finalLink}">📱 Установить Hiddify (Android)</a>
        `;
        linksDiv.style.display = 'block';
    } else {
        alert('Неверный пароль');
    }
}

function link() {
    const encoded = atob("V0R4MTYxNzMwLDE3NDY2MDgwOGd4bC5MZ2Fzb3I="); 
    return `hiddify://install-sub/?url=https://con.x8net.world/hash/${encoded}#YourSub`;
}
