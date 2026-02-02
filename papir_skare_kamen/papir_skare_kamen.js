function odabir(igrac) {

    const opcije = ['papir', 'skare', 'kamen'];
    let rezultat = '';

    const racunalo = opcije[Math.floor(Math.random() * opcije.length)];

    if (igrac === racunalo) {

        rezultat = "Neriješeno";

    } else if (

        (igrac === 'papir' && racunalo === 'kamen') || (igrac === 'skare' && racunalo === 'papir') || (igrac === 'kamen' && racunalo === 'skare')
    ) {

        rezultat = "Pobijeda";

    } else {
        
        rezultat = "Poraz";
    }

    document.getElementById('rezultat').innerText = rezultat;

}
