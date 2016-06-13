var beers = [
	  "Fraser Briggs - $30 - Aldi",
	  "Tooheys New - $40 - BottleShop",
	  "Rivet Lager - $20 - Aldi",
	  "Rivet Gold - Brian's Shout",
	  "Extra Dry - $50 - BottleShop",
    ];

document.getElementById("newbeerbtn").addEventListener("click", function() { 
    var randoutcome = beers [ Math.floor( Math.random() * beers.length ) ]; 
    document.getElementById("text").innerHTML = randoutcome;     
});