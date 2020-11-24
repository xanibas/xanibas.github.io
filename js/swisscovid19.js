$(document).ready(function() {
	// var d1 = new Date();
	// var d2 = new Date(20,11,20,19,59,0,0);
	// console.log(d1)
	// console.log(d2)
	// console.log(getTime(d1-d2))
	showCases();

});

$("select#canton").on("change", function(value) {
	console.log($(this).val())
    showCases($(this).val());
});

$(window).scroll(function(){
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 200);
  });

// var getTime = function(timediff) {
//     var days=Math.floor(numberOfHours/24);
//     var remainder=numberOfHours % 24;
//     var hours=Math.floor(remainder);
//     var minutes=Math.floor(60*(remainder-hours));
//     console.log(days)
//     if(days>0)
//     	return("Updated ",toString(days)," days ago")
//     else if(hours>0)
//     	return("Updated ",toString(hours)," hrs ago")
//     else if(minutes>0)
//     	return("Updated ",toString(minutes)," min ago")
//     else
//     	return("Updated few sec ago.")
// }

var showCases = function() {

	var cards = document.getElementsByClassName("card");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("card-cases");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	var cards = document.getElementsByClassName("jumbotron");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("jumbotron-cases");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	$(window).scrollTop(0);

	$(".btn.btn-primary.btn-sm.btn-cases").focus();
}

var showTests = function() {

	var cards = document.getElementsByClassName("card");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("card-tests");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	var cards = document.getElementsByClassName("jumbotron");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("jumbotron-tests");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	$(window).scrollTop(0);

	$(".btn.btn-primary.btn-sm.btn-tests").focus();
}

var showBeds = function() {

	var cards = document.getElementsByClassName("card");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("card-beds");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	var cards = document.getElementsByClassName("jumbotron");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("jumbotron-beds");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	$(window).scrollTop(0);

	$(".btn.btn-primary.btn-sm.btn-beds").focus();
}

var showICU = function() {

	var cards = document.getElementsByClassName("card");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("card-icus");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	var cards = document.getElementsByClassName("jumbotron");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("jumbotron-icus");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	$(window).scrollTop(0);

	$(".btn.btn-primary.btn-sm.btn-icus").focus();
}

var showTrends = function() {

	var cards = document.getElementsByClassName("card");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("card-trends");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	var cards = document.getElementsByClassName("jumbotron");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "none";

	var cards = document.getElementsByClassName("jumbotron-trends");
	for(var i = 0; i < cards.length; i++)
		cards[i].style.display = "block";

	$(window).scrollTop(0);

	$(".btn.btn-primary.btn-sm.btn-trends").focus();
}
