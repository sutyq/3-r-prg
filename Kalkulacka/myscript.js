window.onload = function(){

    let tlacitko = document.getElementById("tlacitko")
    let cislo1 = document.getElementById("cislo1")
    let cislo2 = document.getElementById("cislo2")
    let mark = document.getElementById("mark")
    let res = document.getElementById("result")

    function secti() {
        tlacitko.style = "color:red"
        let result = (parseInt(cislo1.value) + parseInt(cislo2.value));
        res.innerHTML = "<h1>" + result + "<h1>";  
    }

    function odecti() {
        let result = (parseInt(cislo1.value) - parseInt(cislo2.value));
        res.innerText = result;
    }

    function nasob() {
        let result = (parseInt(cislo1.value) * parseInt(cislo2.value));
        res.innerText = result;
    }

    function del() {
        if(parseInt(cislo2.value) == 0){
            alert("Nelze delit nulou")
        }

        else{
            let result = (parseInt(cislo1.value) / parseInt(cislo2.value));
            res.innerText = result;  
        }

    }

    function vypocitej(){
        switch(mark.value){
            case "+":
                secti()
                break
            case "-":
                odecti()
                break
            case "*":
                nasob()
                break
            case "/":
                del()
                break
            default:
                alert("Neplatne znamenka")
                
        }
    }
    tlacitko.onclick = vypocitej;
    cislo1.addEventListener("keydown", function(e){
        if(e.code == "Enter"){
            alert("Enter")
        }

    })
}