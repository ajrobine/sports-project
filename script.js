function launchModal(){
	$("#tc_2").click(function(){
		$("#new_event, #mask").show();
	});

	$(".close, #mask").click(function(){
		$(".modal, #mask").hide();
	});
};

function createEvent(){

//Set time input's placeholder to the current time
	var d = new Date();
	var hour = d.getHours();
	var amPm = "am";

	if(hour > 12){
		hour -= 12;
		amPm = "pm";
	};

	var now = hour + ":" + d.getMinutes() + amPm + " (that's now)";
	
	$("#time").attr("placeholder", now);

//Set date input's placeholder to today's date
	var month = new Array()
		month[0] = "Jan ";
		month[1] = "Feb ";
		month[2] = "Mar ";
		month[3] = "Apr ";
		month[4] = "May ";
		month[5] = "Jun ";
		month[6] = "Jul ";
		month[7] = "Aug ";
		month[8] = "Sep ";
		month[9] = "Oct ";
		month[10] = "Nov ";
		month[11] = "Dec ";
	var date = d.getDate();
	var today = month[d.getMonth()] + date + " (that's today)";

	$("#date").attr("placeholder", today);

//Show date input only if time input gets focused
	$("#date_container").hide();
	$("#time").focus(function(){
		$("#date_container").show();
	});

};

$(document).ready(function(){
	launchModal();
	createEvent();
});