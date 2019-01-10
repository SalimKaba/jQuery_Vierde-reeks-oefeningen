/*

Oefening 4 :

Maak een formulier aan waarin naam, voornaam, geboortedatum, geboorteplaats,
werk en bedrijf worden aangevraagd.
Maak een "Genereer" knop om een korte presentatie zin te maken.

Voorbeeld: Als de ingevoerde gegevens zijn:
Lesley Forn, 11/11/1987, Amsterdam, Coach, Genk
dan wordt de presentatie zin:
Lesley Forn, Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.

     */

$("#submit").click(function() {
  event.preventDefault();
  console.log($("#naam").val() + " " + $("#voornaam").val() + ", Geboren op " + $("#geboortedatum").val() + " in " + $("#geboorteplaats").val() + ", momenteel een " + $("#werk").val() + "in " + $("#bedrijf").val() + "."  );
})
