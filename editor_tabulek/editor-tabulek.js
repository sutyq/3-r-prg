let tabulka;
let vychoziVelikostX = 5;
let vychoziVelikostY = 3;
let aktivniBunka;

function vytvorVychoziTabulku() {
    tabulka = document.createElement("table");
    document.body.appendChild(tabulka);
    for (let y = 0; y < vychoziVelikostY; y++) {
        let tr = document.createElement("tr");
        tabulka.appendChild(tr);

        for (let x = 0; x < vychoziVelikostX; x++) {
            tr.appendChild(vytvorBunku());
        }
    }
}

window.onload = function () {
    vytvorVychoziTabulku();
}


function vytvorBunku() {
    let td = document.createElement("td");

    let tdInput = document.createElement("input");

    tdInput.type = "text";
    tdInput.onfocus = function () {
        aktivniBunka = this;
    }
    td.appendChild(tdInput);

    return td;
}

function vytvorTlacitkoAVlozHo(popisek, rodic){
    let btn = document.createElement("button");
    btn.textContent = popisek;
    rodic.appendChild(btn);
    return btn;
}

function indexRadkuAktivniBunky(){
    let cilHledani = tabulka.childNodes;
    let hledanyPrvek = aktivniBunka.parentElement.parentElement;
    return Array.prototype.indexOf.call(cilHledani, hledanyPrvek);
}
function pridejRadekNahoru(){
    let radek = vytvorRadek();
    let indexVybraneho = indexRadkuAktivniBunky();
    tabulka.insertBefore(radek, tabulka.childNodes[indexVybraneho])
}
function pridejRadekDolu(){
    let radek = vytvorRadek();
    let indexVybraneho = indexRadkuAktivniBunky();
    if (tabulka.lastChild == tabulka.childNodes[indexVybraneho]){
        tabulka.appendChild(radek);
    }
    else{
        tabulka.insertBefore(radek, tabulka.childNodes[indexVybraneho + 1]);
    }
}