// this is our basic starter function
var buttonArr = ["Survivor", "The Bachelor", "The Bachelorette", "America's Next Top Model", "RuPaul's Drag Race", "The Amazing Race", "Project Runway", "Top Chef"];

var userChoice;
var pushButtons = $("#pushButtons");
var submit = $("#submitUserInfo");
var userSelection = $("#userSelection");
var GIPHYAPI = "&api_key=DOdaYWsvIcH6mZayHPSrZ7OHHpVrnMWq";
var pushGifs = $("#pushGifs");

// main function for making buttons
singleButton = (input) => {
	// local variable that will help abbreviate a button
	var button = $("<button>");

	button
		// give the button text of the variable being ran
		.text(input)
		// give the variable the data attribute of "ID" but with the passed value of event
		.attr("ID", input)
		// give the button a class of gifButton so we can call all of them later
		.addClass("gifBtn mx-auto btn btn-info col-4")
	// append to the pushButtons area.
	pushButtons.append(button);
};

// Function to create all the buttons
 allButtons =  () => {
	// Do a for loop that goes through all the values of buttonArr
	for (var i = 0; i < buttonArr.length; i++) {
		singleButton(buttonArr[i]);
	}
};

// start the page
$(document).ready(function () {

	// Run a for loop on the make buttons function
	allButtons();

	// on click of the SUBMIT button, 
	submit.on("click", function (event) {
		event.preventDefault();
		// let's grab userSelection and put it to use
		userChoice = userSelection.val();
		// run singleButton on the input, which bags it, tags it and pushes it to the right area
		buttonArr.push(userChoice)
		// clear out the input field
		userSelection.val("");
		// rerun the allbuttons after removing the values.
		pushButtons.empty();
		allButtons();
	});

	// event listener for gifButton
	$(document).on("click", ".gifBtn", function () {
		// empty the gifs to make room for more
		pushGifs.empty();
		// set a variable from the ID to make it easy to search
		var search = $(this).attr("id");
		// set a variable to check the JSON object easily
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + GIPHYAPI + "&limit=10&rating=G&lang=en";
		// use the Jquery AJAX function
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (object) {
			var { data } = object;
			// for loop to go through all ten items;
			for (var i = 0; i < data.length; i++) {
				var img = $("<img>");
				var srcStill = data[i].images.fixed_height_still.url;
				var src = data[i].images.fixed_height.url;

				// Give the image some stuff:
				img
					.addClass("imgClass")
					.attr("srcStill", srcStill)
					.attr("srcMoving", src)
					.attr("motion", "still")
					.attr("src", srcStill);
				//push it to the page div
				pushGifs.append(img);
			}
			// end of for loop
		});
		// end of the gifButton Function
	});


	// on click of the imgClass

	$("body").on("click", 'img', function () {
		// cleanup variable
		var motion = $(this).attr("motion");
		console.log(motion);
		// if it is still
		if (motion === "still") {
			// change the data-motion attribute to moving
			$(this).attr("motion", "moving")
				// update the image src attribute to srcMoving
				.attr("src", ($(this).attr('srcmoving')));
		} else {
			// change the data-motion attribute to still
			$(this).attr("motion", "still");
			// update the image src attribute to srcStill
			$(this).attr("src", ($(this).attr('srcstill')))
		}
	});

	// end of onload function
});