function modal(){
	$(".tc, #close").click(function(){
		$("#mask, .modal").toggle();
	});
};

$(document).ready(function(){
	modal();
});