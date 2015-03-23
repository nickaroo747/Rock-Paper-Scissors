/////////////////////////////////////////////////
/* Window on loads + Begining text instructions*/
/////////////////////////////////////////////////
window.onload = function(){
	document.getElementById("box1A").innerHTML= "Player Picks:<br>";

	document.getElementById("box1B").innerHTML= "Computer Picks:<br>";

	document.getElementById("scorebox1").innerHTML= "Player Score:";

	document.getElementById("scorebox2").innerHTML= "Computer Score:";

	document.getElementById("playerscore").innerHTML= "0";

	document.getElementById("computerscore").innerHTML= "0";


	document.getElementById("completebox").innerHTML= "Winner / Loser";
};
///////////////////////////////
/* Html Button value comes in*/
///////////////////////////////
function pickRock (){
	document.getElementById("box2A").innerHTML= "Rock";
	// detWin();
	// playToFive();
};

function pickPaper (){
	document.getElementById("box2A").innerHTML= "Paper";
	// detWin();
	// playToFive();
};

function pickScissors (){
	document.getElementById("box2A").innerHTML= "Scissors";
	// detWin();
	// playToFive();
};
// /////////////////////////////////////////
// /* Computer's randomized value comes in*/
// /////////////////////////////////////////
var nameArray = ["Rock", "Paper", "Scissors"];

function randomPick (){
	var x = Math.floor(Math.random() * nameArray.length);
	rname = (nameArray[x]);
	document.getElementById("box2B").innerHTML= rname
};
// ///////////////////////////////////////////////////
// /* The two values are compared against each other*/
// ///////////////////////////////////////////////////
// var x = function detWin (){
// 	if (document.getElementById("box2A") == "Paper" && document.getElementById("box2B") = "Rock" {document.getElementById("playerscore").innerHTML= "Player<br>Score<br> i++"};
// 	if (document.getElementById("box2A") == "Rock" && document.getElementById("box2B") = "Scissors" {document.getElementById("playerscore").innerHTML= "Player<br>Score<br> i++"};
// 	if (document.getElementById("box2A") == "Scissors" && document.getElementById("box2B") = "paper" {document.getElementById("playerscore").innerHTML= "Player<br>Score<br> i++"};

// 	if (document.getElementById("box2A") == "Paper" && document.getElementById("box2B") = "Rock" {document.getElementById("playerscore").innerHTML= "Computer<br>Score<br> i++"};
// 	if (document.getElementById("box2A") == "Rock" && document.getElementById("box2B") = "Scissors" {document.getElementById("playerscore").innerHTML= "Computer<br>Score<br> i++"};
// 	if (document.getElementById("box2A") == "Scissors" && document.getElementById("box2B") = "paper" {document.getElementById("playerscore").innerHTML= "Computer<br>Score<br> i++"};
// };
// /////////////////
// /* Play to Five*/
// /////////////////

// function playToFive() {
//      if (document.getElementById("playerscore").innerHTML == "Computer<br>Score<br> i++" = "paper" {document.getElementById("playerscore").innerHTML= "Computer<br>Score<br> i++"};
//   }