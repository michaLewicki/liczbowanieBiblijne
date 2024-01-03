var wartosci;

	wartosci = {
		"Α" : 1,
		"Ἀ" : 1,
		"α" : 1,
		"ά" : 1,
		"Ἄ" : 1,
		"Ἅ" : 1,
		"Ἁ" : 1,
		"ἄ" : 1,
		"ὰ" : 1,
		"ἀ" : 1,
		"ᾳ" : 1,
		"ᾶ" : 1,
		"ἁ" : 1,
		"ᾷ" : 1,
		"ἂ" : 1,
		"ἅ" : 1,
		"ᾅ" : 1,
		"ᾄ" : 1,
		"ἃ" : 1,
		"ᾲ" : 1,
		"ᾴ" : 1,
		"Β" : 2,
		"β" : 2,
		"Γ" : 3,
		"γ" : 3,
		"Δ" : 4,
		"δ" : 4,
		"Ε" : 5,
		"Ἑ" : 5,
		"Ἐ" : 5,
		"ε" : 5,
		"έ" : 5,
		"ὲ" : 5,
		"ἔ" : 5,
		"ἐ" : 5,
		"ἕ" : 5,
		"ἑ" : 5,
		"Ἔ" : 5,
		"Ἕ" : 5,
		"ἓ" : 5,
		"Ζ" : 7,
		"ζ" : 7,
		"Η" : 8,
		"η" : 8,
		"Ἦ" : 8,
		"Ἠ" : 8,
		"ῆ" : 8,
		"ῇ" : 8,
		"ὴ" : 8,
		"ἡ" : 8,
		"ἦ" : 8,
		"ή" : 8,
		"ῃ" : 8,
		"ἠ" : 8,
		"ᾔ" : 8,
		"ἢ" : 8,
		"ἤ" : 8,
		"ἧ" : 8,
		"ἣ" : 8,
		"ῄ" : 8,
		"Ἡ" : 8,
		"ἥ" : 8,
		"Ἢ" : 8,
		"ᾗ" : 8,
		"ᾖ" : 8,
		"ᾐ" : 8,
		"Ἤ" : 8,
		"ῂ" : 8,
		"Θ" : 9,
		"θ" : 9,
		"Ἰ" : 10,
		"Ἱ" : 10,
		"ι" : 10,
		"ί" : 10,
		"ἱ" : 10,
		"ὶ" : 10,
		"ἰ" : 10,
		"ἶ" : 10,
		"ἴ" : 10,
		"ῖ" : 10,
		"ἵ" : 10,
		"ΐ" : 10,
		"ἷ" : 10,
		"ϊ" : 10,
		"ῒ" : 10,
		"Ἴ" : 10,
		"ἳ" : 10,
		"ῗ" : 10,
		"Κ" : 20,
		"κ" : 20,
		"Λ" : 30,
		"λ" : 30,
		"Μ" : 40,
		"μ" : 40,
		"Ν" : 50,
		"ν" : 50,
		"Ξ" : 60,
		"ξ" : 60,
		"Ο" : 70,
		"ο" : 70,
		"Ὁ" : 70,
		"ὃ" : 70,
		"ὸ" : 70,
		"ὁ" : 70,
		"ό" : 70,
		"ὄ" : 70,
		"ὅ" : 70,
		"Ὀ" : 70,
		"ὀ" : 70,
		"Ὃ" : 70,
		"Ὅ" : 70,
		"Ὄ" : 70,
		"Π" : 80,
		"π" : 80,
		"Ρ" : 100,
		"ρ" : 100,
		"Ῥ" : 100,
		"ῥ" : 100,
		"ῤ" : 100,
		"Σ" : 200,
		"σ" : 200,
		"ς" : 200,
		"Τ" : 300,
		"τ" : 300,
		"Υ" : 400,
		"υ" : 400,
		"ῦ" : 400,
		"ύ" : 400,
		"ὐ" : 400,
		"ὕ" : 400,
		"ὑ" : 400,
		"ὗ" : 400,
		"ὺ" : 400,
		"ὓ" : 400,
		"ὖ" : 400,
		"ὔ" : 400,
		"ΰ" : 400,
		"ϋ" : 400,
		"Ὑ" : 400,
		"ῢ" : 400,
		"ῧ" : 400,
		"Φ" : 500,
		"φ" : 500,
		"Χ" : 600,
		"χ" : 600,
		"Ψ" : 700,
		"ψ" : 700,
		"Ω" : 800,
		"Ὦ" : 800,
		"ω" : 800,
		"ὼ" : 800,
		"ῷ" : 800,
		"ώ" : 800,
		"ῶ" : 800,
		"ῳ" : 800,
		"ὥ" : 800,
		"ὡ" : 800,
		"ὦ" : 800,
		"ὢ" : 800,
		"ὠ" : 800,
		"ὧ" : 800,
		"ῴ" : 800,
		"ᾧ" : 800,
		"Ὡ" : 800,
		"ὤ" : 800,
		"ᾠ" : 800,
		"Ὥ" : 800,
		"ῲ" : 800,
	};

window.onload = function()
{
    var input = document.getElementById("tekst");
    var przycisk = document.querySelector("button[class=oblicz]");
    var wynik = document.getElementById("wynik");
    
    var verseVal = 0;
    var controlVal = 1;
	var temp = 0;
	var tempURI = "";
    var c;
    var tekst = "";
    
	przycisk.onclick = function()
	{
        wynik.innerHTML = "";
        verseVal = 0;
        controlVal = 1;
        temp = 0;
        tekst = input.value;
        if(tekst.length === 0) return false;

        for (var i = 0; i < input.value.length; i++)
        {
			c = input.value[i];
			tempURI = encodeURIComponent(c);
            if(tempURI == "%3C" || tempURI == "%3E")
            {
                tekst = zamienZnak(tekst,i,"?");
            }
            if (c == ' ') continue;
            if (c == ',') continue;
            if (c == '.') continue;
			if (c == ';') continue;
			if(c == "\n") 
			{
				wynik.innerHTML += "Wykryto i pominięto znak nowej linii.<br />";
				continue;
			}

            temp = wartoscLitery(c);
            if(temp === 0)
            {
                wynik.innerHTML += "Nierozpoznany znak: " + tekst[i] + "<br />";
                controlVal = 0;
            }
            else
            {
                verseVal += temp;
                wynik.innerHTML += c + " -> " + temp + "<br />";
            }
        }
	wynik.innerHTML += "<br /><br />";
        wynik.innerHTML = "<br /><br /></div>Szczegóły:<br />" + document.getElementById("wynik").innerHTML;

        if(controlVal === 0) wynik.innerHTML = "<br /><div class='uwaga'>Wykryto przynajmniej jeden nierozpoznany znak. Sprawdź szczegóły poniżej.</div>" + document.getElementById("wynik").innerHTML;

        if(verseVal % 7 === 0) wynik.innerHTML = "<div class='suma ramka zielona'>" + verseVal + " jest podzielne przez 7" + "</div>" + document.getElementById("wynik").innerHTML;
        else wynik.innerHTML = "<div class='suma ramka czerwona'>" + "Reszta z dzielenia przez 7 = " + verseVal % 7 + "</div>" + document.getElementById("wynik").innerHTML;
        
        wynik.innerHTML = "<div class='suma ramka'>" + "Suma wartości liter: <div class='liczba'>" + verseVal + "</div></div>" + document.getElementById("wynik").innerHTML;
        wynik.innerHTML = "<div class='suma'>" + "Analizowany tekst:<br /><div class='wynikTekst'>" + tekst + "</div></div><br />" + document.getElementById("wynik").innerHTML;

        return false;
	}
};

function wartoscLitery(litera) 
{
    for (var v in wartosci) 
    {
	   if (litera === v) return wartosci[v];
	}
	return 0;
 };

 function zamienZnak(str, indeks, znak)
 {
    if(indeks > str.length - 1) return str;
    return str.substring(0,indeks) + znak + str.substring(indeks + 1);
 };
