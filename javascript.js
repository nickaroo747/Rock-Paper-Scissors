
	var playerScore = document.getElementById("playerScore");
	var computerScore = document.getElementById("computerScore");
	document.getElementById("completebox").innerHTML= "Winner / Loser";

	var box1 = document.getElementById("playerScore").innerText = "0";
	var box2 = document.getElementById("computerScore").innerText = "0";
	var playerPlays = document.getElementById("playerMove");
	var box4 = document.getElementById("computerMove");

	var rockBtn = document.getElementById("rock");
	var paperBtn = document.getElementById("paper");
	var scissorsBtn = document.getElementById("scissors");
	
	var playerWins = 0;
	var computerWins = 0;

	var computerMove;

/* Computer's randomized value comes in*/

var nameArray = ["rock", "paper", "scissors"];

function randomPick (){
	var x = Math.floor(Math.random() * nameArray.length);
	rname = (nameArray[x]);
	document.getElementById("computerMove").innerHTML= rname;
	return rname;
};
/* The two values are compared against each other*/

function getWinner(playerMove, computerMove) {
	if(
		playerMove === 'rock' && computerMove === 'paper' ||
		playerMove === 'scissors' && computerMove === 'rock' ||
		playerMove === 'paper' && computerMove === 'scissors') {
		computerWins++;
		whoWins(computerWins);
		// console.log('computer wins');
		computerScore.innerHTML = computerWins;
		// console.log(computerWins++);
		return 'computer wins';
	
	} else if (playerMove === computerMove){
	
		console.log('tie');
		return 'tie';

	} else {
		playerWins++;
		whoWins(playerWins);
		// console.log('player wins');
		playerScore.innerHTML = playerWins;
		// console.log(playerWins++);
		return 'player wins';
	}
	console.log(playerMove);
}

	function theGame(move){
		var winner = getWinner(move, randomPick());
		playerPlays.innerText = move;
		// if winner = getWinner {dothis}
	};

	rockBtn.addEventListener('click', function(){
		theGame('rock');

	});

	paperBtn.addEventListener('click', function(){
		theGame('paper');

	});

	scissorsBtn.addEventListener('click', function(){
		theGame('scissors');

	});


function whoWins(score) {
	if( score === 5) {
		console.log("Player Wins: " + playerWins);
		if (playerWins > computerWins){
			document.getElementById("completebox").innerHTML= "Winner";
			document.getElementById("rock").disabled = true;
			document.getElementById("paper").disabled = true;
			document.getElementById("scissors").disabled = true;
		}
		else {document.getElementById("completebox").innerHTML= "Loser";
			document.getElementById("rock").disabled = true;
			document.getElementById("paper").disabled = true;
			document.getElementById("scissors").disabled = true;
		}	
	}
}

















