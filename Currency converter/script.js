// Tímto se naplní dropdown menu, když se načte stránka
document.addEventListener('DOMContentLoaded', () => {
    const zMen = document.getElementById('zMen');
    const doMen = document.getElementById('doMen');

    fetch('https://api.exchangerate-api.com/v4/latest/CZK')
        .then(response => response.json())
        .then(data => {
            const meny = Object.keys(data.rates);
            meny.forEach(mena => {
                // Možnost převádět "z měny"
                const optionZ = document.createElement('option');
                optionZ.value = mena;
                optionZ.textContent = mena;
                zMen.appendChild(optionZ);

                // Možnost pevádět "do měny"
                const optionDo = document.createElement('option');
                optionDo.value = mena;
                optionDo.textContent = mena;
                doMen.appendChild(optionDo);
            });
        })
        .catch(error => {
            console.error('Chyba:', error);
            alert('Došlo k chybě při načítání měn.');
        });
});

// Převést
document.getElementById('tlacitkoPrevest').addEventListener('click', () => {
    const zMen = document.getElementById('zMen').value;
    const doMen = document.getElementById('doMen').value;
    const castka = document.getElementById('castka').value;

    // Kontrola vyplnění polí
    if (!zMen || !doMen || !castka) {
        alert('Vyplňte všechna pole.');
        return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${zMen}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.rates[doMen]) {
                alert('Neplatný kód měny.');
                return;
            }

            const kurz = data.rates[doMen];
            const vysledek = castka * kurz;
            document.getElementById('vysledek').textContent = `${castka} ${zMen} = ${vysledek.toFixed(2)} ${doMen}`;
        })
        .catch(error => {
            console.error('Chyba:', error);
            alert('Došlo k chybě při získávání dat.');
        });
});
