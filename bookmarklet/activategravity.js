console.log('Loaded bookmarklet')

javascript:(function(){
	
var v="1.8"; //jQuery version

if (window.jQuery==undefined || window.jQuery.fn.jquery < v){

	var done = false;
	var script = document.createElement("script")
	script.src = "http://ajax.googleapis.com/ajax/libs/jquery/ " + v + "/jquery.min.js";
	script.onload = script.onreadstatechange = function(){

		if (!done &&(!this.readyState || this.readystate=="loaded" || this.readstate == "complete")){
			done = true;
			initMyBookmarklet();

		}
	};

	document.getElementsByTagName("head")[0].appendChild(script);
}else{
	initMyBookmarklet();
}

function initMyBookmarklet(){
	(window.myBookmarklet = function (){
	$(document).ready(function() {
	$('body').mouseover('click', function() { // This can be changed to anything you like in order to trigger jGravity effect
		$('body').jGravity({ // jGravity works best when targeting the body
			target: 'everything', // Enter your target critera e.g. 'div, p, span', 'h2' or 'div#specificDiv', or even 'everything' to target everything in the body
			ignoreClass: 'ignoreMe', // Specify if you would like to use an ignore class, and then specify the class
			weight: 25, // Enter any number 1-100 ideally (25 is default), you can also use 'heavy' or 'light'
			depth: 5, // Enter a value between 1-10 ideally (1 is default), this is used to prevent targeting structural divs or other items which may break layout in jGravity
			drag: true // Decide if users can drag elements which have been effected by jGravity
		});		
	});
});

	})();
}

})();