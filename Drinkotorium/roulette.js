var outcomes = [
	  "You rock! Get yourself a drink", // good stuff
	  "You rock! Get yourself a drink",	  
	  "You rock! Get yourself a drink",
      "Be Cool! Get someone else a drink",
	  "Be Cool! Get someone else a drink",
      "Finish a 1/4 of your drink!", // bad stuff
      "Finish 1/2 your drink!!",
	  "You Lose! Finish your drink!!!",
    ];

document.getElementById("ndbtn").addEventListener("click", function() { 
    var randoutcome = outcomes [ Math.floor( Math.random() * outcomes.length ) ]; 
    document.getElementById("text").innerHTML = randoutcome;     
});