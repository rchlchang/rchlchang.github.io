console.log('Loaded Font Size Dynamic!!!!!!!!!!!!');

javascript:(function(){											// wrapper to load jQuery, if necessary
	var v = "1.8";														// the minimum version of jQuery we want
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
		(window.myBookmarklet = function() {
			$(document).mousemove(function(){ //add this for interactivity
				var p=document.getElementsByTagName('*');
				for(i=0;i<p.length;i++){
					if(p[i].style.fontSize){
						var s=parseInt(p[i].style.fontSize.replace("px",""));
					} else {
						var s=12;}s+=2;p[i].style.fontSize=s+"px"}
					}); //close interactivity

			$(document).click(function(){
				var p=document.getElementsByTagName('*');
				for(i=0;i<p.length;i++){
					if(p[i].style.fontSize){
						var s=parseInt(p[i].style.fontSize.replace("px",""));
					} else {
						var s=12;}s-=10;p[i].style.fontSize=s+"px"}
					});

		})();	// end your code block
	}


})();