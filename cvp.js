var url = "http://localhost:3000/post";

var myName = prompt("Please enter your name: ", "");
var counter = 0
var pscore = 0
var cscore = 0

document.getElementById("heading").innerHTML = "Computer Vs " + myName;

function rocksign() {
    
    /*
    var comp = document.createElement('img'); 
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
    document.getElementById('body').appendChild(img);*/
    //var counter = 0
    var rock = document.getElementById("display");
    var response = computerResponse();
    if (response === "rock") {
        rock.innerHTML = "It's a Tie!";
        pscore = pscore;
        cscore = cscore;
        score.innerHTML = pscore + "   :  " + cscore;

    }
    else if (response === "paper") {
        rock.innerHTML = "Computer Wins!";
        cscore++;
        score.innerHTML = pscore + "  :  " + cscore;

    }

    else if (response === "scissors") {
        rock.innerHTML = myName + " Wins!";
        pscore++;
        score.innerHTML = pscore + "  :  " + cscore;

    }

    function computerResponse() {

        var generateNum = random();
        if (generateNum === 0) {
            computerResponse = "rock";
        }

        else if (generateNum === 1) {
            computerResponse = "paper";
        }

        else if (generateNum === 2) {
            computerResponse = "scissors";
        }
        function random() {
            var num = Math.floor(Math.random() * 3)
            return num;
        }
        return computerResponse;
    }
    if (counter < 2) {
        document.getElementById("rock").innerHTML;
        counter++;
    }
    else {
        document.getElementById("rock").disabled = true;
    }

    $.post(url + '?data=' + JSON.stringify({
        'name': myName, 
        '': '',
        'action': 'generateCode'
    }),
        response);
    
}

function papersign() {

    //var counter = 0
    var paper = document.getElementById("display");

    var response = computerResponse();
    if (response === "rock") {
        paper.innerHTML = myName + " Wins!"
        pscore++
        score.innerHTML = pscore + ":" + cscore

    }
    else if (response === "paper") {
        paper.innerHTML = "It's a Tie!"
        pscore = pscore;
        cscore = cscore;
        score.innerHTML = pscore + ":" + cscore
    }

    else if (response === "scissors") {
        paper.innerHTML = "Computer Wins!"
        cscore++
        score.innerHTML = pscore + ":" + cscore
    }

    function computerResponse() {

        var generateNum = random();
        if (generateNum === 0) {
            computerResponse = "rock";
        }

        else if (generateNum === 1) {
            computerResponse = "paper";
        }

        else if (generateNum === 2) {
            computerResponse = "scissors";
        }
        function random() {
            var num = Math.floor(Math.random() * 3)
            return num;
        }
        return computerResponse;
    }

    if (counter < 2) {
        document.getElementById("paper").innerHTML;
        counter++;
    }
    else {
        document.getElementById("paper").disabled = true;
    }
}


function scissorssign() {

    //var counter = 0
    var scissors = document.getElementById("display");
    var response = computerResponse();
    if (response === "rock") {
        scissors.innerHTML = "It's a Tie!";
        pscore = pscore;
        cscore = cscore;
        score.innerHTML = pscore + ":" + cscore
    }
    else if (response === "paper") {
        scissors.innerHTML = "Computer Wins!"
        cscore++
        score.innerHTML = pscore + ":" + cscore
    }

    else if (response === "scissors") {
        scissors.innerHTML = myName + " " + "Wins";
        pscore++
        score.innerHTML = pscore + ":" + cscore
    }

    function computerResponse() {

        var generateNum = random();
        if (generateNum === 0) {
            computerResponse = "rock";
        }

        else if (generateNum === 1) {
            computerResponse = "paper";
        }

        else if (generateNum === 2) {
            computerResponse = "scissors";
        }
        function random() {
            var num = Math.floor(Math.random() * 3)
            return num;
        }
        return computerResponse;
    }
    if (counter < 2) {
        document.getElementById("scissors").innerHTML;
        counter++;
    }
    else {
        document.getElementById("scissors").disabled = true;
    }
}

if (pscore>cscore) {
    score.innerHTML = "Winner: " + myName
}

else if (cscore>pscore){
    score.innerHTML = "Winner: Computer"
}

else if (pscore=cscore) {
    score.innerHTML = "It's a tie!"
}
$.post(url + '?data=' + JSON.stringify({
    'name': myName, //client's identity on the server
    'action': 'generateCode'
}),
    response);


