function slideUp(){
	$(".screen").animate({"top": "+=100%"}, 300);

	$("#menu_options").fadeOut("fast", function(){
		$("#back").fadeIn("fast");
	});
}

function toggleScreen(){
	$("#post_event").click(function(){
		$("#subscreen_post").show();
		slideUp();
	});

	$("#find_event").click(function(){
		$("#subscreen_find").show();
		slideUp();
	});

	$("#menu").click(function(){
		$("#subscreen_menu").show();
		slideUp();
	});

	$("#back, .submit").click(function(){
		$("#back").fadeOut("fast", function(){
			$("#menu_options").fadeIn("fast");
		});
		$(".screen").animate({"top": "-=100%"}, 300, function(){
			$("#subscreen_post, #subscreen_find, #subscreen_menu").hide();
		});
	});
};

$(document).ready(function(){

	toggleScreen();
	$(".event").click(function(){
		$(this).css("background-color", "#fff")
	});

});