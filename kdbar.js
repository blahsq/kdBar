(function ($) {
     $.fn.kdBar = function(options) {
         var _this = this,
             settings = $.extend({
             backgroundColor: 'green',
             height: '5'
         }, options );
         
         _this.css({
             'position': 'fixed',
             'background': settings.backgroundColor,
             'height': settings.height + 'px'
         });
         $(window).on('scroll', function() {
             var windowScrollTop = $(window).scrollTop(),
             documentHeight = $(document).height(),
             windowHeight = $(window).height(),
             progressPosition = (windowScrollTop / (documentHeight - windowHeight)) * 100;
    
             _this.css('width', progressPosition + '%');
         });
    };
 
} (jQuery));
