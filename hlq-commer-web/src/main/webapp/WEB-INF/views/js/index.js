$(document).ready(function() {
	startTime();
	$("#login").click(function() {
		console.info('111');
	})
	
})
function startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		$("#time").html("当前时间：" + h + ":" + m + ":" + s)
		t=setTimeout('startTime()', 500);
	}
	function checkTime(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}