(function($){
	$.fn.accordion = function(){
		return this.each(function(options){
			 var defaults = {
				 visibleByDefault:0
			 };
			 
			 var o = $.extend(defaults,options);
			 var e = $(this); 
			 e.children().find('p').hide();
			 e.children(":eq("+(o.visibleByDefault)+")").children("p")  // :eq(0)
			.show();
		 
			 e.children().find('h1').click(function(){
				 $(this).next('p').slideToggle(700).parent().siblings().children('p').slideUp("slow");
			 });
		});
	};
})(jQuery);