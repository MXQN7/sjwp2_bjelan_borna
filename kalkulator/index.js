function racunanje(operator){

    let a = parseFloat(document.getElementById("prvi").value);
    let b = parseFloat(document.getElementById("drugi").value);

    if (operator === "+") document.getElementById("rezultat").innerText = a + b;
    else if (operator === "-") document.getElementById("rezultat").innerText = a - b;
    else if (operator === "*") document.getElementById("rezultat").innerText = a * b;
    else if (operator === "/") document.getElementById("rezultat").innerText = a / b;

}

function brisanje(){

    document.getElementById("prvi").value = "";
    document.getElementById("drugi").value = "";
    document.getElementById("rezultat").innerText = "";
}
