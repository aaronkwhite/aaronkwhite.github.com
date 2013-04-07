/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *   
 * Author: Richard Shepherd
 *       www.richardshepherd.com
 *       @richardshepherd   
 */// On your marks, get set...
$(document).ready(function(){$window=$(window);$("[data-type]").each(function(){$(this).data("offsetY",parseInt($(this).attr("data-offsetY")));$(this).data("Xposition",$(this).attr("data-Xposition"));$(this).data("speed",$(this).attr("data-speed"))});$('section[data-type="background"]').each(function(){var e=$(this),t=e.offset(),n=t.top;$(window).scroll(function(){if($window.scrollTop()+$window.height()>n&&n+e.height()>$window.scrollTop()){var t=-($window.scrollTop()/e.data("speed"));e.data("offsetY")&&(t+=e.data("offsetY"));var r="50% "+t+"px";e.css({backgroundPosition:r})}})})});