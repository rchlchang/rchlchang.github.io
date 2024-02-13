// $(document).ready(function() {
	$(window).load(function() {

	// Initialize Masonry
	$('.grid').masonry({
		// isFitWidth: true,
		percentPosition: true,
		columnWidth: '.col',
		itemSelector: '.griditem',
		// isAnimated: !Modernizr.csstransitions
	}).imagesLoaded(function() {
		$(this).masonry('reload');
	});


});
