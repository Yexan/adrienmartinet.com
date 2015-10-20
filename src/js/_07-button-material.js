/*!
 * Button material module
 */
 
$(function(){

  /**
  * When you click on a .btn.material
  * you trigger a wave effect
  */
  $(".btn.material").click(function(e) {
    var thisButton   = $(this),
        parentOffset = thisButton.offset(),
        cursorX      = e.pageX - parentOffset.left,
        cursorY      = e.pageY - parentOffset.top;

    thisButton.children(".wave").remove();
    thisButton.append("<div class=\"wave\"></div>");
    thisButton.children(".wave").css({"left" : cursorX + "px", "top" : cursorY + "px"});

    // Launch a callback when the animation is over
    $(".wave").one("webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend", function() {
      waveCallback(thisButton);
    });
  });

  // Function declaration

  function waveCallback(button){

    if(button.hasClass('email')){
      button.children('i').remove();
      button.append('<i class="icon-reply"></i>');
      button.children('i').css({"transform" : "rotate(125deg)", "-webkit-transform" : "rotate(125deg)"});
    }

  }

});