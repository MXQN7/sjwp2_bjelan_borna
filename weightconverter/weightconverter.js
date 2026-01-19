const dugme = document.getElementById("convert_dugme");

dugme.addEventListener("click", function () {
    const kg = document.getElementById("kgUnos").value;

    const pounds = kg * 2.20462;
    const ounces = kg * 35.274;
    const grams = kg * 1000;

    document.getElementById("pounds").textContent = pounds.toFixed(2);
    document.getElementById("ounces").textContent = ounces.toFixed(2);
    document.getElementById("grams").textContent = grams.toFixed(2);
});
