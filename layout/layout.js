function toggleScreen(){
	$("#show_secondary").click(function(){
		$(".screen").animate({"top": "+=100%"}, 300);
	});
	$("#show_primary").click(function(){
		$(".screen").animate({"top": "-=100%"}, 300);
	});
};

function eventBoxes(){
};

$(document).ready(function(){

	toggleScreen();
	eventBoxes();

});