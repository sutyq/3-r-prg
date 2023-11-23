const microsoft = new Firma("Microsoft Corporation", "Redmont, Washington");
const google = new Firma("Google LLC", "Mountain View, California");

let vytvorenSeznam = true

function pripravTlacitko(firma){
    const buttonPridej = document.createElement("button");
    buttonPridej.innerText = "Pridej Zamestnance " + firma.nazev
    buttonPridej.onclick = function() {pridejZamestnanace(firma);}


    const buttonVypis = document.createElement("button");
    buttonVypis.innerText = "Vypis Zamestnance " + firma.nazev
    buttonVypis.onclick = function() {
        if (vytvorenSeznam){
            vypisZamestnance(firma)
            vytvorenSeznam = false
        } 
}

   
    document.body.appendChild(buttonPridej);
    document.body.appendChild(buttonVypis);
    
}

function pridejZamestnanace(firma){
    const jmeno = prompt("Zadej jméno zaměstnance");
    const vek = prompt("Věk")
    const pozice = prompt("Pozice")
    const zamestnanec = new Zamestnanec(jmeno, vek, pozice);
    firma.zamestnanci.push(zamestnanec);
    vytvorenSeznam = true
    ulozZamestnance = JSON.stringify(firma.zamestnanci)
    localStorage.setItem("zamestnanci", ulozZamestnance)
    ulozFirmu = JSON.stringify(firma)
    localStorage.setItem("firma", ulozFirmu)
}

function vypisZamestnance(firma){
    const h3 = document.createElement("h3")
    h3.innerText = "Zamestnanci" + " " + firma.nazev
    const seznam = document.createElement("ul");
    for(const zamestnanec of firma.zamestnanci){
        seznam.innerHTML += `<li>Jméno: ${zamestnanec.jmeno}</li>`;
        seznam.innerHTML += `<li>Věk: ${zamestnanec.vek}</li>`;
        seznam.innerHTML += `<li>Pozice: ${zamestnanec.pozice}</li>`;
        
    }
    document.body.appendChild(seznam);
}

pripravTlacitko(microsoft)
pripravTlacitko(google)