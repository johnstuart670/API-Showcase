// this is our basic starter function
var  buttonArr = ["Survivor", "The Bachelor", "The Bachelorette", "America's Next Top Model", "RuPaul's Drag Race", "The Amazing Race", "Project Runway", "Top Chef"];


var userInput;
var tempVariable;
var pushButtons = $("#pushButtons")

// main function for making buttons
function singleButton(event){
	console.log(event);
	// local variable that will help abbreviate a button
var button = $("<button>");

button
// give the button text of the variable being ran
.text(event)
// give the variable the data attribute of "ID" but with the passed value of event
.attr("ID", event)
// give the button a class of gifButton so we can call all of them later
.addClass("gifButton")
// append to the pushButtons area.
pushButtons.append(event);
};

// Function to create all the buttons
function allButtons (){
// Do a for loop that goes through all the values of buttonArr
	for (var i = 0; i < buttonArr.length; i++){
pushButtons(buttonArr[i]);
	}
};

// start the page
$(document).ready(function(){

// Run a for loop on the make buttons function
allButtons();
// on click of the SUBMIT button, 
// run the make a button function for the input and 
// then clear the input


});