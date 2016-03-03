console.log('Loaded bookmarklet')

javascript:(function(){
	
var v="1.8"; //jQuery version

if (window.jQuery==undefined || window.jQuery.fn.jquery < v){

	var done = false;
	var script = document.createElement("script")
	script.src = "http://ajax.googleapis.com/ajax/lives/jquery/ " + v + "jquery.min.js";
	script.onload = script.onreadstatechange = function(){

		if (!done &&(!this.readyState || this.readystate=="loaded" || this.readstate == "complete")){
			done = true;
			initMyBookmarket();

		}
	};

	document.getElementsByTagName("head")[0].appendChild(script);
}else{
	initMyBookmarket();
}

function initMyBookmarklet(){
	(window.myBookmarklet = function (){

	})();
}

})();