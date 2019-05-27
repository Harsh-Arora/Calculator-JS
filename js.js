//GLOBAL VARIABLES

var res = 0;
var mem = 0;
var op = 0;

// CLEAR
function funcc(){
	document.getElementById('res').innerHTML = "";
	document.getElementById('hist').innerHTML = "";
}

// NUMBERS

function func1(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "1";
}

function func2(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "2";
}

function func3(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "3";
}

function func4(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "4";
}

function func5(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "5";
}

function func6(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "6";
}

function func7(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "7";
}

function func8(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "8";
}

function func9(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "9";
}

function func0(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + "0";
}

function funcdot(){
	var x = document.getElementById('res').innerHTML;
	document.getElementById('res').innerHTML = x + ".";
}

// OPERATIONS

	// Addition
function funcadd(){
	mem = document.getElementById('res').innerHTML;
	document.getElementById('hist').innerHTML = mem + "+";
	document.getElementById('res').innerHTML = "";
	op=1;
}

	// Subtration
function funcsubtract(){
	mem = document.getElementById('res').innerHTML;
	document.getElementById('hist').innerHTML = mem + "-";
	document.getElementById('res').innerHTML = "";
	op=2;
}

	// Division
function funcdiv(){
	mem = document.getElementById('res').innerHTML;
	document.getElementById('hist').innerHTML = mem + "/";
	document.getElementById('res').innerHTML = "";
	op=3;
}

	// Multiplication
function funcmulti(){
	mem = document.getElementById('res').innerHTML;
	document.getElementById('hist').innerHTML = mem + "x";
	document.getElementById('res').innerHTML = "";
	op=4;
}

	// Equals
function funceq(){
	res = parseInt(document.getElementById('res').innerHTML);
	document.getElementById('hist').innerHTML = document.getElementById('hist').innerHTML + res;
	mem = parseInt(mem);
	if(op==1)
	{
		res=res+mem;		
	}
	else if(op==2)
	{
		res=mem-res;
	}
	else if(op==3)
	{
		res=mem/res;
	}
	else if(op==4)
	{
		res=res*mem;
	}
	else
	{
		document.getElementById('res').innerHTML = res;
	}

	document.getElementById('res').innerHTML = res;
}	