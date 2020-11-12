$(document).ready(function() {
	// $('select[name=selValue]').val("CH");
	// $('.selectpicker').selectpicker('refresh');
	showCases();
	// $(".btn.btn-primary.btn-sm.btn-canton").click();
});

// $(document).on('click', '.mdb-select.md-form.md-dark',function(){
//     // $(".btn.btn-primary.btn-sm.btn-canton").focus();
// });

$("select#canton").on("change", function(value) {
	console.log($(this).val())
    showCases($(this).val());
});

$(window).scroll(function(){
    $(".jumbotron").css("opacity", 1 - $(window).scrollTop() / 200);
  });

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

	// var cantn = document.getElementsByClassName("tr-canton");
	// for(var i = 0; i < cantn.length; i++)
	// 	cantn[i].style.display = "";

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

	// var cantn = document.getElementsByClassName("tb-canton");
	// for(var i = 0; i < cantn.length; i++)
	// 	cantn[i].style.display = "";

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

	// var cantn = document.getElementsByClassName("tr-canton");
	// for(var i = 0; i < cantn.length; i++)
	// 	cantn[i].style.display = "";

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

	// var cantn = document.getElementsByClassName("tb-canton");
	// for(var i = 0; i < cantn.length; i++)
	// 	cantn[i].style.display = "";

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

	// var cantn = document.getElementsByClassName("tr-canton");
	// for(var i = 0; i < cantn.length; i++)
	// 	cantn[i].style.display = "";

	$(window).scrollTop(0);

	$(".btn.btn-primary.btn-sm.btn-trends").focus();
}
