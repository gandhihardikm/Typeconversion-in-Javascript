/**
 * 
 */

function getIndiaTime(){
	d = new Date();
	document.getElementById("demo").innerHTML="LocalTime : " + d.getTime();
	utc=d.getTime()+(d.getTimezoneOffset()*60000);
	ist = new Date(utc + (3600000*5.5));
	document.getElementById("demo1").innerHTML= "Indian Standard Time : " + ist;
}

function getkg()
{
	var number = parseInt(prompt("Enter pound : "));
	alert(number*0.453 + " kgs");
}

function getkm()
{
	var number = parseInt(prompt("Enter Miles : "));
	alert(number*1.609 + " kms");
}

function getlitre()
{
	var number = parseInt(prompt("Enter Gallon : "));
	alert(number*3.785 + " litres");	
}