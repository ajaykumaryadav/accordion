/*
 *
 * Accordion - A simple accordion group for most use cases.
 * Version 0.1
 * @requires jQuery v1.5
 *
 * Copyright (c) 2014 Ajay Kumar Yadav
 * Published for free use under MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 */

!function($){
  $.fn.accordion = function(options){

    // Setting and extending initial values...
    var defaults = {
      tabClick: ".topWrap",
      tabContent: ".details",
      accordAnimation: 1000,
      bodyAnimation: 1000,
      parentActiveClassWrap: "li",
      spaceTop: 0,
      delay:0,
      closeOther : false
    };
    var openedTabHeight = null
    var settings = $.extend({}, defaults, options);
    $(settings.tabContent).hide();

    // gobal vaiables setting
    var openedTabHeight = null;

    // onclick of accordion closes the other tab
    var closeOther = function() {
      $( "li" ).each(function( index ) {
        var hasClassCheck =  $(this).hasClass("active")
        if (hasClassCheck == true) {
          $(this).removeClass("active");
          openedTabHeight = parseInt($(this).outerHeight());
          $(settings.tabContent).slideUp(settings.accordAnimation*2);
        }
    });
    }

    $(document).on('click', settings.tabClick ,function() {
      var el = $(this),
          display = el.siblings(settings.tabContent).css("display"),
          sibling = el.siblings(settings.tabContent),
          parent = el.parent(settings.parentActiveClassWrap),
          offsetTop = el.offset().top;

      if( display == "block" ) {
        sibling.slideUp( parseInt(settings.accordAnimation) );
        parent.removeClass("active");
      } else {
        if(settings.closeOther == true) {
          console.log("close")
          closeOther();
        }

        el.siblings(settings.tabContent).slideToggle(parseInt(settings.accordAnimation));
        if( display != "none" ) {
          parent.removeClass("active");
        }
        else {
          parent.addClass("active");
        }
        $('html,body').animate({scrollTop:offsetTop - openedTabHeight- settings.spaceTop},parseInt(settings.bodyAnimation));
      }
    });
  };
}(window.jQuery);