/*
Oefening 1 :

Maak een lijst met drie elementen (Rock, Paper, Scissors).
Voeg een **SPEEL** button toe. Wanneer er op **SPEEL** word gedrukt,
kies de computer een element willekeurig uit (Rock, Paper of Scissors).
Vergelijk het met het door de speler gekozen element om te zien wie er gewonnen heeft
tussen de mens en de machine.

Bonus: Voeg een overwinning en nederlaag teller toe en geef het percentage van de
overwinning tegen de computer weer.      */

$("#scissors").on('click', function(){
  var result = compare('scissors', computerChoice());
  $("#decision").html(result);
});

$('#rock').on('click', function(){
  var result = compare('rock', computerChoice());
  $("#decision").html(result);
});

$('#paper').on('click', function(){
  var result = compare('paper', computerChoice());
  $("#decision").html(result);
});


var compare = function(me, opponent) {
  if(me === 'rock') {

      if(opponent === 'rock') {
          return 'Tie';
      } else if (opponent === 'paper') {
        return 'My rock lost to paper :(';
      } else if (opponent === 'scissors') {
        return 'My rock crushed scissors! >:)';
      }

  } else if (me === 'paper') {

      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'My paper beat rock :)';
      } else if (opponent === 'scissors') {
        return 'My paper got cut by scissors! >:)';
    }
  } else if (me === 'scissors') {

      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'paper') {
        return 'My scissor beat paper :(';
      } else if (opponent === 'rock') {
        return 'My scissor got crushed! >:)';
    }
  } else {
    return "That doesn't make any sense!"
  }
};
var computerChoice = function() {
        var random = Math.random();
        if (random < 0.333) {
	      return  'rock';
        } else if(random < 0.67777) {
	      return 'paper';
        } else {
	      return 'scissors';
        }
};
