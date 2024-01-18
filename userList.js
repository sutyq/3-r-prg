var uzivatele = JSON.parse(localStorage.getItem('uzivatele')) || [];


var userListContent = document.getElementById('user-list-content');

uzivatele.forEach(function(uzivatel) {
    var userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <p><strong>Jméno:</strong> ${uzivatel.jmeno}</p>
        <p><strong>Příjmení:</strong> ${uzivatel.prijmeni}</p>
        <p><strong>Uživatelské jméno:</strong> ${uzivatel.uzivatelskeJmeno}</p>
        <p><strong>Věk:</strong> ${uzivatel.vek}</p>
        <p><strong>Pohlaví:</strong> ${uzivatel.pohlavi}</p>
        <p><strong>Status:</strong> ${uzivatel.status}</p>
        <hr>
    `;
    userListContent.appendChild(userInfo);
});
