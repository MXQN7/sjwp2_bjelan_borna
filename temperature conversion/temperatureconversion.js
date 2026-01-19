const dugme = document.getElementById("convert_dugme");

dugme.addEventListener("click", function () {

    const celzius = Number(document.getElementById("celziusUnos").value);
    const farenheit = (celzius * 9/5) + 32;
    const kelvin = celzius + 273.15;

    document.getElementById("farenheit").textContent = farenheit.toFixed(2);
    document.getElementById("kelvin").textContent = kelvin.toFixed(2);

});
