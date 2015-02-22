
//Responsive Video Hack
$(function() {
    
    var $allVideos = $("iframe[src^='http://player.vimeo.com'], iframe[src^='http://www.youtube.com'], object, embed"),
    $fluidEl = $("figure");
        
  $allVideos.each(function() {
  
    $(this)
      // jQuery .data does not work on object/embed elements
      .attr('data-aspectRatio', this.height / this.width)
      .removeAttr('height')
      .removeAttr('width');
  
  });
  
  $(window).resize(function() {
  
    var newWidth = $fluidEl.width();
    $allVideos.each(function() {
    
      var $el = $(this);
      $el
          .width(newWidth)
          .height(newWidth * $el.attr('data-aspectRatio'));
    
    });
  
  }).resize();

});

// Hero scroll to anchor
$('a[href^="#"]').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Proper go to previous page link
$(document).ready(function(){
    $('.takemeback').click(function(){
        parent.history.back();
        return false;
    });
});

