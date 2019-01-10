/*

Oefening 3 :

Maak een formulier aan waarin om de naam, voornaam, e-mailadres en telefoonnummer
van de gebruiker wordt gevraagd.

Controleer of het e-mailadres inderdaad een e-mailadres is, controleer of
het telefoonnummer alleen cijfers bevat en of de naam en voornaam alleen letters of
streepjes bevatten.

     */

$("#submit").click(function() {

  event.preventDefault();

  /*   e-mailadres   */
  let mail = $("#e-mailadres").val();
  function IsEmail(email) {
    mail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!mail.test(email)) {
  return false;
  }else{
  return true;
  }

  /*  telefoonnummer   */
  let foon = $("#telefoonnummer").val();
  function IsTelefoon(telefoon) {
    foon = /^([0-9])+$/;
  if(!foon.test(telefoon)) {
  return false;
  }else{
  return true;
  }


  /*  naam   */
  let nam = $("#naam").val();
  function IsNaam(nm) {
    nam = /^([a-zA-Z_\.\-\+])+$/;
  if(!nam.test(nm)) {
  return false;
  }else{
  return true;
  }

  /*  voornaam   */
  let vnam = $("#voornaam").val();
  function IsNaam(vnm) {
    vnam = /^([a-zA-Z_\.\-\+])+$/;
  if(!vnam.test(vnm)) {
  return false;
  }else{
  return true;
  }
})
