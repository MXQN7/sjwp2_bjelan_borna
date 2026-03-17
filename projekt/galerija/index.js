var podaci = {

    filmovi: [
        {naslov:"Inception", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/c28DpQIVrHX2py2RHM6S5pr6Wnd.jpg", opis:"Kradljivac koji ulazi u snove dobiva priliku za iskupljenje ako uspije izvesti nemoguću misiju usađivanja ideje u nečiji um.", glumci:"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page"},
        {naslov:"Titanic", slika:"https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", opis:"Mladić i djevojka iz različitih društvenih slojeva zaljubljuju se na kobnom prvom putovanju Titanica.", glumci:"Leonardo DiCaprio, Kate Winslet, Billy Zane"},
        {naslov:"Interstellar", slika:"https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg", opis:"Tim istraživača putuje kroz crvotočinu u svemiru kako bi pronašao novi dom za čovječanstvo.", glumci:"Matthew McConaughey, Anne Hathaway, Jessica Chastain"},
        {naslov:"The Dark Knight", slika:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", opis:"Batman se suočava s Jokerom, kaotičnim kriminalcem koji Gotham baca u potpuni nered.", glumci:"Christian Bale, Heath Ledger, Aaron Eckhart"},
        {naslov:"Avatar", slika:"https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg", opis:"Paraplegični marinac na Pandori postaje rastrgan između naredbi koje mora izvršiti i svijeta koji počinje smatrati svojim domom.", glumci:"Sam Worthington, Zoe Saldana, Sigourney Weaver"},
        {naslov:"Gladiator", slika:"https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", opis:"Izdani rimski general kreće putem osvete nakon što postane gladijator.", glumci:"Russell Crowe, Joaquin Phoenix, Connie Nielsen"},
        {naslov:"The Matrix", slika:"https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg", opis:"Haker otkriva šokantnu istinu o stvarnosti i svojoj ulozi u ratu protiv njezinih kontrolora.", glumci:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss"},
        {naslov:"Jurassic Park", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/ym53tdQF0JAy2ASXTdJt2RBPYbz.jpg", opis:"Tijekom obilaska zabavnog parka s oživljenim dinosaurima, sigurnosni sustav zakaže i sve izmakne kontroli.", glumci:"Sam Neill, Laura Dern, Jeff Goldblum"},
        {naslov:"The Godfather", slika:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", opis:"Najmlađi sin mafijaške obitelji nevoljko ulazi u svijet organiziranog kriminala.", glumci:"Marlon Brando, Al Pacino, James Caan"},
        {naslov:"Forrest Gump", slika:"https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg", opis:"Dobrodušni Forrest nesvjesno postaje dio ključnih američkih događaja dok cijeli život slijedi svoju veliku ljubav.", glumci:"Tom Hanks, Robin Wright, Gary Sinise"},
        {naslov:"Fight Club", slika:"https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", opis:"Nezadovoljni uredski radnik i karizmatični prodavač sapuna osnivaju tajni klub koji prerasta u nešto mnogo opasnije.", glumci:"Brad Pitt, Edward Norton, Helena Bonham Carter"},
        {naslov:"Joker", slika:"https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", opis:"Odbijeni komičar polako tone u ludilo i postaje simbol kaosa u Gothamu.", glumci:"Joaquin Phoenix, Robert De Niro, Zazie Beetz"},
        {naslov:"Avengers", slika:"https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", opis:"Najmoćniji Marvelovi heroji udružuju snage kako bi zaustavili globalnu prijetnju.", glumci:"Robert Downey Jr., Chris Evans, Scarlett Johansson"},
        {naslov:"Deadpool", slika:"https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", opis:"Bivši specijalac s ubrzanim iscjeljenjem kreće u osvetu čovjeku koji mu je uništio život.", glumci:"Ryan Reynolds, Morena Baccarin, Ed Skrein"},
        {naslov:"Spider-Man", slika:"https://image.tmdb.org/t/p/w500/5weKu49pzJCt06OPpjvT80efnQj.jpg", opis:"Mladi Peter Parker pokušava uskladiti običan život srednjoškolca s odgovornošću superheroja.", glumci:"Tom Holland, Zendaya, Jacob Batalon"},
        {naslov:"The Lion King", slika:"https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", opis:"Mladi lav princ mora prihvatiti svoju sudbinu i vratiti se kako bi spasio svoje kraljevstvo.", glumci:"Matthew Broderick, Jeremy Irons, James Earl Jones"},
        {naslov:"Toy Story", slika:"https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", opis:"Kad ljudi nisu prisutni, igračke ožive i upuštaju se u neočekivanu avanturu.", glumci:"Tom Hanks, Tim Allen, Don Rickles"},
        {naslov:"Frozen", slika:"https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", opis:"Neustrašiva djevojka kreće na put kako bi spasila kraljevstvo i svoju sestru s moćima leda.", glumci:"Kristen Bell, Idina Menzel, Josh Gad"},
        {naslov:"Shrek", slika:"https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", opis:"Mrzovoljni ogr pristaje spasiti princezu kako bi vratio mir svom močvarnom domu.", glumci:"Mike Myers, Eddie Murphy, Cameron Diaz"},
        {naslov:"Harry Potter", slika:"https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", opis:"Mladi čarobnjak otkriva svoje porijeklo i započinje školovanje u Hogwartsu.", glumci:"Daniel Radcliffe, Emma Watson, Rupert Grint"}
    ],

    serije: [
        {naslov:"Breaking Bad", slika:"https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", opis:"Profesor kemije, suočen s teškom dijagnozom, okreće se proizvodnji metamfetamina kako bi osigurao obitelj.", glumci:"Bryan Cranston, Aaron Paul, Anna Gunn"},
        {naslov:"Stranger Things", slika:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", opis:"Nakon nestanka dječaka, mali grad otkriva tajne eksperimente, natprirodne sile i neobičnu djevojčicu.", glumci:"Millie Bobby Brown, Finn Wolfhard, David Harbour"},
        {naslov:"Game of Thrones", slika:"https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", opis:"Plemićke obitelji vode krvavu borbu za vlast dok se na sjeveru budi drevna prijetnja.", glumci:"Emilia Clarke, Kit Harington, Peter Dinklage"},
        {naslov:"Sherlock", slika:"https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg", opis:"Briljantni detektiv Sherlock Holmes u modernom Londonu rješava najzamršenije slučajeve.", glumci:"Benedict Cumberbatch, Martin Freeman, Una Stubbs"},
        {naslov:"Friends", slika:"https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg", opis:"Šestero prijatelja prolazi kroz ljubav, posao i svakodnevni život u New Yorku.", glumci:"Jennifer Aniston, Courteney Cox, Lisa Kudrow"},
        {naslov:"The Office", slika:"https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg", opis:"Dokumentaristički stil prati neobične zaposlenike i njihove svakodnevne situacije u uredu.", glumci:"Steve Carell, John Krasinski, Jenna Fischer"},
        {naslov:"The Walking Dead", slika:"https://image.tmdb.org/t/p/w500/reKs8y4mPwPkZG99ZpbKRhBPKsX.jpg", opis:"Skupina preživjelih pokušava opstati u svijetu preplavljenom zombijima i ljudskom brutalnošću.", glumci:"Andrew Lincoln, Norman Reedus, Melissa McBride"},
        {naslov:"The Mandalorian", slika:"https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", opis:"Usamljeni lovac na ucjene putuje rubnim dijelovima galaksije i preuzima neočekivanu odgovornost.", glumci:"Pedro Pascal, Carl Weathers, Giancarlo Esposito"},
        {naslov:"Loki", slika:"https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg", opis:"Nakon bijega s Teseraktom, Loki se nađe u sukobu s organizacijom koja nadzire vrijeme.", glumci:"Tom Hiddleston, Owen Wilson, Sophia Di Martino"},
        {naslov:"The Witcher", slika:"https://image.tmdb.org/t/p/w500/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg", opis:"Mutirani lovac na čudovišta probija se kroz svijet pun magije, rata i političkih spletki.", glumci:"Henry Cavill, Anya Chalotra, Freya Allan"},
        {naslov:"House of the Dragon", slika:"https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg", opis:"Unutarnji sukobi unutar kuće Targaryen vode prema razornom građanskom ratu.", glumci:"Matt Smith, Emma D'Arcy, Olivia Cooke"},
        {naslov:"Dark", slika:"https://media.themoviedb.org/t/p/w220_and_h330_face/hdWEOEfMf9GxPtULIxs3fol7yOm.jpg", opis:"Nestanak djece otkriva zamršenu mrežu tajni, obiteljskih veza i putovanja kroz vrijeme.", glumci:"Louis Hofmann, Lisa Vicari, Maja Schone"},
        {naslov:"Lost", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg", opis:"Preživjeli nakon avionske nesreće pokušavaju opstati na otoku prepunom misterija.", glumci:"Matthew Fox, Evangeline Lilly, Josh Holloway"},
        {naslov:"Prison Break", slika:"https://image.tmdb.org/t/p/w500/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg", opis:"Inženjer namjerno završi u zatvoru kako bi pomogao nepravedno osuđenom bratu pobjeći.", glumci:"Wentworth Miller, Dominic Purcell, Sarah Wayne Callies"},
        {naslov:"Vikings", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg", opis:"Saga o usponu legendarnog vikinškog ratnika i njegovim pohodima.", glumci:"Travis Fimmel, Katheryn Winnick, Clive Standen"},
        {naslov:"Peaky Blinders", slika:"https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", opis:"Ambiciozni vođa gangsterske obitelji gradi kriminalno carstvo u Birminghamu nakon Prvog svjetskog rata.", glumci:"Cillian Murphy, Paul Anderson, Sophie Rundle"},
        {naslov:"Narcos", slika:"https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg", opis:"Kronika uspona narkokartela i borbe vlasti protiv njihovog širenja.", glumci:"Wagner Moura, Pedro Pascal, Boyd Holbrook"},
        {naslov:"Better Call Saul", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/daDLhgWsyAiydJoMaRjycnMacxe.jpg", opis:"Priča o transformaciji malog odvjetnika Jimmyja McGilla u lukavog Saula Goodmana.", glumci:"Bob Odenkirk, Rhea Seehorn, Jonathan Banks"},
        {naslov:"The Boys", slika:"https://image.tmdb.org/t/p/w500/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg", opis:"Skupina osvetnika pokušava razotkriti i zaustaviti korumpirane superheroje.", glumci:"Karl Urban, Jack Quaid, Antony Starr"},
        {naslov:"Wednesday", slika:"https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", opis:"Wednesday Addams istražuje niz zločina i nadnaravnu tajnu u akademiji Nevermore.", glumci:"Jenna Ortega, Emma Myers, Catherine Zeta-Jones"}
    ],

    dokumentarci: [
        {naslov:"Our Planet", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/wRSnArnQBmeUYb5GWDU595bGsBr.jpg", opis:"Serijal prikazuje ljepotu prirodnog svijeta i izazove s kojima se suočava zbog promjena okoliša.", glumci:"David Attenborough"},
        {naslov:"Planet Earth", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/bNcNxUtZ520d5de5s78onoiSiwQ.jpg", opis:"Epski prikaz najrazličitijih staništa i životinjskog svijeta na Zemlji.", glumci:"David Attenborough"},
        {naslov:"Free Solo", slika:"https://image.tmdb.org/t/p/w500/v4QfYZMACODlWul9doN9RxE99ag.jpg", opis:"Prati Alexa Honnolda u pokušaju povijesnog uspona na El Capitan bez ikakve zaštitne opreme.", glumci:"Alex Honnold, Tommy Caldwell, Jimmy Chin"},
        {naslov:"The Social Dilemma", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/jcaM6V2tCtu6iMHDsGLBUbaYgYp.jpg", opis:"Bivši zaposlenici tehnoloških tvrtki govore o utjecaju društvenih mreža na društvo i pojedinca.", glumci:"Skyler Gisondo, Kara Hayward, Vincent Kartheiser"},
        {naslov:"Cosmos", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/5o07ps0QZ0bNoRYxTn9cPdRWlUu.jpg", opis:"Putovanje kroz svemir, znanost i povijest ljudskog razumijevanja kozmosa.", glumci:"Neil deGrasse Tyson"},
        {naslov:"Blackfish", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/kCk4mDFE96Mn1AYfEcbxkIiw7ND.jpg", opis:"Dokumentarac istražuje posljedice držanja kitova u zatočeništvu.", glumci:"Tilikum, Dave Duffus, Samantha Berg"},
        {naslov:"March of the Penguins", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/o9xJ1xG1WKlHkl8ACqq0LShOuMu.jpg", opis:"Prikaz iznimnog godišnjeg putovanja carskih pingvina u surovim uvjetima Antarktike.", glumci:"Morgan Freeman"},
        {naslov:"Tiger King", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/dXQCEjVth8P8L47XIsoRt0oL8Gw.jpg", opis:"Nevjerojatna priča o vlasnicima privatnih zoo vrtova, egzotičnim mačkama i sukobima iza kulisa.", glumci:"Joe Exotic, Carole Baskin, Bhagavan Antle"},
        {naslov:"Seaspiracy", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/iFNri0fwn1WfCoxf3H3v1z8dCm4.jpg", opis:"Film istražuje utjecaj komercijalnog ribolova na oceane i morski život.", glumci:"Ali Tabrizi, Richard O'Barry, Lucy Tabrizi"},
        {naslov:"Blue Planet", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/iARGkBflbQ6HWGZgstGRK0YeKgl.jpg", opis:"Dokumentarna serija vodi gledatelje u fascinantan podvodni svijet oceana.", glumci:"David Attenborough"},
        {naslov:"The Last Dance", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/oVf4xGGbDtwVHiKn8uTuSriY7PH.jpg", opis:"Pogled iza kulisa na Michaela Jordana i posljednju šampionsku sezonu Chicago Bullsa.", glumci:"Michael Jordan, Scottie Pippen, Phil Jackson"},
        {naslov:"Apollo 11", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/woLMRroHyoTGoXyxdEeBJEYBFtu.jpg", opis:"Arhivski prikaz misije Apollo 11 i prvog spuštanja čovjeka na Mjesec.", glumci:"Neil Armstrong, Buzz Aldrin, Michael Collins"},
        {naslov:"Minimalism", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/2QXHf52RxGbw1PYrCtbD99iZdBV.jpg", opis:"Dokumentarac propituje potrošački način života i predstavlja filozofiju minimalizma.", glumci:"Joshua Fields Millburn, Ryan Nicodemus"},
        {naslov:"The Game Changers", slika:"https://media.themoviedb.org/t/p/w220_and_h330_face/eufF3xEif5EZ1gTjdubw3KWh9xU.jpg", opis:"Film istražuje vezu između sportske izvedbe i prehrane temeljene na biljkama.", glumci:"James Wilks, Arnold Schwarzenegger, Lewis Hamilton"},
        {naslov:"Earthlings", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/fcRUYYyDWLJPlX7D6RPtQwdU7G2.jpg", opis:"Potresan dokumentarac o odnosu čovjeka prema životinjama u različitim industrijama.", glumci:"Joaquin Phoenix"},
        {naslov:"My Octopus Teacher", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/hvTVZb7hBC8tZAGoEhH5eiMJu2B.jpg", opis:"Filmaš razvija neobično prijateljstvo s hobotnicom u južnoafričkim vodama.", glumci:"Craig Foster, Tom Foster"},
        {naslov:"Before the Flood", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/u0EfH2zsp6rLOvEKVvWGgzGRQn3.jpg", opis:"Dokumentarac prati istraživanje uzroka i posljedica klimatskih promjena širom svijeta.", glumci:"Leonardo DiCaprio, Barack Obama, Elon Musk"},
        {naslov:"Night on Earth", slika:"https://upload.wikimedia.org/wikipedia/en/2/21/Night_on_earth_poster.jpg", opis:"Serijal otkriva kako životinje žive, love i preživljavaju tijekom noći.", glumci:"Samira Wiley"},
        {naslov:"Inside Bill's Brain", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/5RIVJnpIkPt90EwJQwPzqS1UTPG.jpg", opis:"Dokumentarna serija donosi intiman pogled u život, razmišljanje i projekte Billa Gatesa.", glumci:"Bill Gates, Melinda French Gates"},
        {naslov:"Making a Murderer", slika:"https://media.themoviedb.org/t/p/w300_and_h450_face/sy2nV3rCcJQaRK5M0NWvvTU7CBx.jpg", opis:"Istinita kriminalistička priča o kontroverznoj istrazi, suđenju i pravosudnom sustavu.", glumci:"Steven Avery, Laura Ricciardi, Moira Demos"}
    ]

};

    var gallery = document.getElementById("gallery");
    var buttons = document.querySelectorAll(".nav-btn");

    var modal = document.getElementById("myModal");
    var closeBtn = document.querySelector(".close");

    var modal_slika = document.getElementById("modal_slika");
    var modal_naslov = document.getElementById("modal_naslov");
    var modal_opis = document.getElementById("modal_opis");
    var modal_glavne_uloge = document.getElementById("modal_glavne_uloge");

    function prikazi(kategorija) {
        gallery.innerHTML = "";

        podaci[kategorija].forEach(function(item, index) {
            var card = document.createElement("div");
            card.className = "card";
            card.style.animationDelay = (index * 0.06) + "s";

            card.innerHTML =
                "<img src='" + item.slika + "' alt='" + item.naslov + "'>" +
                "<h3>" + item.naslov + "</h3>";

            card.onclick = function() {
                modal.style.display = "block";
                modal_slika.src = item.slika;
                modal_slika.alt = item.naslov;
                modal_naslov.innerText = item.naslov;
                modal_opis.innerText = item.opis;
                modal_glavne_uloge.innerText = item.glumci;
            };

            gallery.appendChild(card);
        });
    }

    buttons.forEach(function(btn) {
        btn.onclick = function() {
            buttons.forEach(function(b) {
                b.classList.remove("active");
            });

            btn.classList.add("active");
            var kategorija = btn.getAttribute("data-category");
            prikazi(kategorija);
        };
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    prikazi("filmovi");