function calculate() {
	var a = document.getElementById("people-input").value;

	var sum1 =  a * 50;
	for (var i = 0; i <= 2; i++) {
		document.getElementsByClassName("g1")[i].innerHTML = sum1;
	}

	var sum2 = a * 0.25;
	for (var i = 0; i <= 5; i++) {
		document.getElementsByClassName("g2")[i].innerHTML = sum2;
	}

	var sum3 = a * 25;
	document.getElementById("g3").innerHTML = sum3;

	var sum4 = a * 12.5;
	document.getElementById("g4").innerHTML = sum4;

	var sum5 = a * 0.5;
	document.getElementById("g5").innerHTML = sum5;

	var sum6 = a * 0.125;
	document.getElementById("g6").innerHTML = sum6;

	var sum7 = a * 0.375;
	document.getElementById("g7").innerHTML = sum7;

	if (a >= 50) {
		document.getElementById("t1").innerHTML = "veel";
	}
}