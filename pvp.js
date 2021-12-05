var url = "http://localhost:3000/post";

function game() {
  var p1Name = prompt("Player 1, please enter your name: ", "");
  var p2Name = prompt("Player 2, please enter your name: ", "");

  var choice1 = prompt(p1Name + ", do you choose rock, paper or scissors? Player 2, please look away.");
  var choice2 = prompt(p2Name + ", do you choose rock, paper or scissors? Player 1, please look away.");

  var game = document.getElementById("game");

  document.getElementById("title").innerHTML = p1Name + " Vs " + p2Name;


  if (choice1 === "rock" && choice2 === "rock") {
    game.innerHTML = "It's a Tie!";
  }

  else if (choice1 === "rock" && choice2 === "paper") {
    game.innerHTML = p2Name + " wins";
  }

  else if (choice1 === "rock" && choice2 === "scissors") {
    game.innerHTML = p1Name + " wins";
  }

  else if (choice1 === "paper" && choice2 === "rock") {
    game.innerHTML = p1Name + " wins";
  }

  else if (choice1 === "paper" && choice2 === "paper") {
    game.innerHTML = "It's a Tie!";
  }

  else if (choice1 === "paper" && choice2 === "scissors") {
    game.innerHTML = p2Name + " wins";
  }

  else if (choice1 === "scissors" && choice2 === "rock") {
    game.innerHTML = p2Name + " wins";
  }

  else if (choice1 === "scissors" && choice2 === "scissors") {
    game.innerHTML = "It's a Tie!";
  }

  else {
    game.innerHTML = "Invalid entry";
  }

}

$.post(url + '?data=' + JSON.stringify({
  'name': myName, //client's identity on the server
  'action': 'generateCode'
}),
  response);

