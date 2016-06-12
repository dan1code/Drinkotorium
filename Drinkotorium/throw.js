$(document).ready( function() {
	$(".throwbtn").click(function() {
		var random = Math.floor(Math.random()*6);
		$(".circle").eq(random).hide();
	});	
});