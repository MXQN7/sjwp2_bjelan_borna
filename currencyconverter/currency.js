const input = document.getElementById("currencyUnos");
const euri = document.getElementById("euri");
const dolari = document.getElementById("dolari");

const btc_dugme = document.getElementById("btc_dugme");
const eth_dugme = document.getElementById("eth_dugme");

const btc_euri = 64689;
const btc_dolari = 76688;

const eth_euri = 1884;
const eth_dolari = 2229;

btc_dugme.addEventListener("click", function () {

    var vrijednost = input.value;
    euri.innerHTML = vrijednost * btc_euri;
    dolari.innerHTML = vrijednost * btc_dolari;
});

eth_dugme.addEventListener("click", function () {

    var vrijednost = input.value;
    euri.innerHTML = vrijednost * eth_euri;
    dolari.innerHTML = vrijednost * eth_dolari;
});
