var time, minutes, blinkOn= false, d, colon, started;

function everything(){
	d = new Date();
	if(blinkOn){
		$("#colon").css("color", "#000000");
		blinkOn = false;
	}
	else{
		$("#colon").css("color", "#FFFFFF");
		blinkOn = true;
	}
	minutes = d.getUTCMinutes().toString();
	Minutes = (minutes.length ==1) ? "0" + minutes : minutes
	$("#hour").html("4");
	$("#minutes").html(Minutes);
}

everything();
setInterval(function(){
	everything();
}, 500);
