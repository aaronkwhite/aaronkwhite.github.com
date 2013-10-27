/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 *       www.richardshepherd.com
 *       @richardshepherd   
 */

// On your marks, get set...
$(document).ready(function(){
            
  // Cache the Window object
  $window = $(window);
  
  // Cache the Y offset and the speed of each sprite
  $('[data-type]').each(function() {  
    $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
    $(this).data('Xposition', $(this).attr('data-Xposition'));
    $(this).data('speed', $(this).attr('data-speed'));
  });
  
  // For each element that has a data-type attribute
  $('section[data-type="background"]').each(function(){
  
  
    // Store some variables based on where we are
    var $self = $(this),
      offsetCoords = $self.offset(),
      topOffset = offsetCoords.top;
    
    // When the window is scrolled...
      $(window).scroll(function() {
  
      // If this section is in view
      if ( ($window.scrollTop() + $window.height()) > (topOffset) &&
         ( (topOffset + $self.height()) > $window.scrollTop() ) ) {
  
        // Scroll the background at var speed
        // the yPos is a negative value because we're scrolling it UP!                
        var yPos = -($window.scrollTop() / $self.data('speed')); 
        
        // If this element has a Y offset then add it on
        if ($self.data('offsetY')) {
          yPos += $self.data('offsetY');
        }
        
        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $self.css({ backgroundPosition: coords });
        
        
      
      }; // in view
  
    }); // window scroll
      
  }); // each data-type

}); // document ready


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