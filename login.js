function prihlasit() {
    
    var uzivatelskeJmenoLogin = document.getElementById('uzivatelske-jmeno-login').value;
    var hesloLogin = document.getElementById('heslo-login').value;

    
    var uzivatele = JSON.parse(localStorage.getItem('uzivatele')) || [];

    
    var prihlasenyUzivatel = uzivatele.find(function(uzivatel) {
        return uzivatel.uzivatelskeJmeno === uzivatelskeJmenoLogin;
    });

    if (!prihlasenyUzivatel) {
        alert('Uživatel s tímto uživatelským jménem neexistuje.');
        return;
    }

    
    if (prihlasenyUzivatel.heslo !== hesloLogin) {
        alert('Nesprávné heslo pro zadané uživatelské jméno.');
        return;
    }

    
    alert('Přihlášení úspěšné. Vítejte, ' + prihlasenyUzivatel.jmeno + '!');
    
}
