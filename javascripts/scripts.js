
/*
* FitText.js 1.2
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

jQuery("#hero h1").fitText(1.2, { minFontSize: '32px', maxFontSize: '80px' });


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

// Parallax
$('.parallax').parallax({
  scroll_factor: 0.5
});


$(document).foundation({
  dropdown: {
    // specify the class used for active dropdowns
    active_class: 'open'
  }
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

