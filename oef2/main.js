/*
Oefening 2 :

Vraag aan de hand van een formulier naar het salaris, het geslacht en het aantal kinderen
van een persoon.

Bereken het salaris door de volgende kosten in mindering te brengen:
- Uitgaven: 18%;
- Verzekering: 7%;
- Bijdragen: 5%;

Het is mogelijk om onder bepaalde voorwaarden kortingen te krijgen op de totale kosten:
- Als de werknemer een vrouw is, krijgt ze 2% korting.
- Indien de werknemer 3 kinderen ten laste heeft, krijgt hij 1% korting.
- Als de werknemer 4 kinderen ten laste heeft, krijgt hij 2% korting.

https://stackoverflow.com/questions/32076594/math-function-with-jquery

     */

$("#submit").click(function() {

      event.preventDefault();

      let salaris = $("#salaris").val();
      let geslacht = $("#geslacht").val();
      let aantal_kinderen = $("#aantal_kinderen").val();
      let uitgaven = 18 % salaris;
      let verzekering = 7 % salaris;
      let bijdragen = 5 % salaris;
      let kosten = uitgaven + verzekering + bijdragen;
      let korting = 0;

      if (geslacht == "vrouw"){
        korting = korting + (2 % kosten);
        }

      switch(parseInt(aantal_kinderen)) {
      case 3:
      korting = korting + (1 % kosten);
      break;
      case 4:
      korting = korting + (2 % kosten);
      break;
      }

      let totale_salaris = salaris - kosten + korting;
      alert (totale_salaris);

      console.log(salaris);
      console.log(aantal_kinderen);
      console.log(geslacht);






})
