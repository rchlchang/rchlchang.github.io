$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#bg').css({
    opacity: function() {
      var elementHeight = $(this).height();
      var newOpacity = ((elementHeight - scrollTop) / elementHeight)-.2;
      // if (newOpacity > .2){
      // 	return newOpacity;
      // }
      // else {
      // 	return .2;
  	  //	}
      return newOpacity;
      }
  });

  $('p').css({
    opacity: function() {
      var newOpacity = (scrollTop*.00146);
      // console.log(newOpacity);
      return newOpacity;
      }
     });
console.log(scrollTop)

if (scrollTop > 310) {
    $ (".hl").addClass("fix");

    // $("#one").css({'margin-top':10});
    // $('#one').css({'color':"red"});
	// element.style.color = "red";
  } else {
    $ (".hl").removeClass("fix");
  }
  

  });
