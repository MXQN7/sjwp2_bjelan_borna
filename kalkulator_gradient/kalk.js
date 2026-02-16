let display = document.getElementById("display");

function append(value) {
    display.value = display.value + value;
}

function obrisi_sve() {
    display.value = "";
}

function obrisi_zadnje() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value);
}
