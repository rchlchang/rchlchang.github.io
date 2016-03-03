console.log('Gravity Activated!!!!!!!!!!!!');

javascript:(function(){											// wrapper to load jQuery, if necessary
	var v = "1.7.2";														// the minimum version of jQuery we want
	// check prior inclusion and version
	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
				done = true;
				initMyBookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		initMyBookmarklet();
	}
	
	function initMyBookmarklet() {
	//your code goes here
	(window.myBookmarklet = function() {
		$(document).ready(function() {
			$("body").mouseover('click', function() {
				$("body").jGravity({
					target: 'everything',
					ignoreClass: 'ignoreMe',
					weight: 25,
					depth: 5,
					drag: true
				});
			});
		});
		})();	// end your code block
	}

})();