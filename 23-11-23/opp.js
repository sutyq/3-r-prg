simon = new Uzivatel("Šimon", 19);
john = new Uzivatel("John", 23);
jane = new Uzivatel("Jane", 45);
peter = new Uzivatel("Peter", 19);
jack = new Uzivatel("Jack", 19);
Uzivatele = [simon, john, jack, jane, peter]
json = JSON.stringify(Uzivatele)
localStorage.setItem("users", json)
console.log(JSON.parse(localStorage.getItem("users")))

window.onload = function(){

let tlacitko = document.getElementById("tlacitko")
let tlacitko1 = document.getElementById("tlacitko1")

function uloz(){
    ulozpeter = JSON.stringify(peter)
    sessionStorage.setItem("peter", json)
}

function vymaz(){
    sessionStorage.removeItem("peter", json)
}
tlacitko.onclick = uloz
tlacitko1.onclick = vymaz
}