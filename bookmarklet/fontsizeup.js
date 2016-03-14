console.log('loaded sizeup')

javascript:(function(){
	
var v="1.8"; //jQuery version

if (window.jQuery==undefined || window.jQuery.fn.jquery < v){

	var done = false;
	var script = document.createElement("script")
	script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
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

function initMyBookmarklet() {
		(window.myBookmarklet = function() {
			$(document).scroll(function(){
				var p=document.getElementsByTagName('*');
				for(i=0; i < p.length; i++){
				if (p[i].style.fontSize){
					var s=parseInt(p[i].style.fontSize.replace("px",""));
				}else{
					var s=12;}s+=2;p[i].style.fontSize=s+"px"}
			});

			$(document).mousemove(function(){
				var p=document.getElementsByTagName('*');
				for(i=0; i < p.length; i++){
				if (p[i].style.fontSize){
					var s=parseInt(p[i].style.fontSize.replace("px",""));
				}else{
					var s=12;}s-=10;p[i].style.fontSize=s+"px"}
			});
			
		})();
	}

})();