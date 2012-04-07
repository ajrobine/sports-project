function launchModal(){
	//Show "new_event" screen
		$("#tc_2").click(function(){
			$("#new_event, #mask").show();
		});
	//Show "find_event" screen
		$("#tc_3").click(function(){
			$("#find_event, #mask").show();
		});
	//Show "login" screen
		$("#tc_4").click(function(){
			$("#login, #mask").show();
		});
	//Show "info" screen
		$("#tc_5").click(function(){
			$("#info, #mask").show();
		});
	//Hide modal and mask
		$(".close, #mask").click(function(){
			$(".modal, #mask").hide();
		});
};

function createEvent(){
	//Set time input's value to the current time
		var d = new Date();
		var hour = d.getHours();
		var minute = d.getMinutes();
		var amPm = "am";

		if(minute < 10){
			minute = "0" + minute;
		};

		if(hour > 12){
			hour -= 12;
			amPm = "pm";
		};

		if(hour < 1){
			hour = 12;
		};

		var now = hour + ":" + minute + amPm + " (that's now)";
	
		$("#time").attr("value", now);
	//Set date input's value to today's date
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

		$("#date").attr("value", today);
	//Show date input only if time input gets focused
		$("#date_container").hide();
		$("#time").focus(function(){
			$("#date_container").show();
		});
};

function findEvent(){
	//Hide all findby menus
		$("#findby_gtype, #findby_players, #findby_when").hide();
	//Display proper menu when each button is clicked
		$("#gtype_btn, #players_btn, #when_btn").click(function(){
			$("#findby_gtype, #findby_players, #findby_when").hide();

			var clicked = $(this).attr("id");
			
			if(clicked == "gtype_btn"){
				$("#findby_gtype").show();
			}else if(clicked == "players_btn" ){
				$("#findby_players").show();
			}else if(clicked == "when_btn" ){
				$("#findby_when").show();
			};
		});
};

function logIn(){
	//Display Password Retrieval Info
		$("#retrieve_password").hide();

		$("#forgot_password").click(function(){	
			$("#retrieve_password").show();
		});
};
$(document).ready(function(){
	launchModal();
	createEvent();
	findEvent();
	logIn();
});