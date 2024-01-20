function registrovat() {
    var jmeno = document.getElementById('jmeno').value;
    var prijmeni = document.getElementById('prijmeni').value;
    var uzivatelskeJmeno = document.getElementById('uzivatelske-jmeno').value;
    var heslo = document.getElementById('heslo').value;
    var vek = document.getElementById('vek').value;
    var pohlavi = document.getElementById('pohlavi').value;
    var status = document.getElementById('status').value;

    
    if (!jmeno || !prijmeni || !uzivatelskeJmeno || !heslo || !vek || !pohlavi || !status) {
        alert('Vyplňte všechna povinná pole.');
        return;
    }

    var uzivatel = {
        jmeno: jmeno,
        prijmeni: prijmeni,
        uzivatelskeJmeno: uzivatelskeJmeno,
        heslo: heslo,
        vek: vek,
        pohlavi: pohlavi,
        status: status
    };
 
    var uzivatele = JSON.parse(localStorage.getItem('uzivatele')) || [];

    uzivatele.push(uzivatel);

    localStorage.setItem('uzivatele', JSON.stringify(uzivatele));

    alert('Uživatel byl úspěšně zaregistrován.');
}
