//JQUERY
jQuery(document).ready(function(){
	jQuery("body").fadeIn(3500);
	jQuery(".load").delay(4000).animate({opacity:0}, 1000, "linear", function(){
		jQuery(".load").css("display","none");	
					
	});
    var owl = jQuery("#owl-demo");
	owl.owlCarousel({
	    autoPlay:3000,
		slideSpeed:100,
		stopOnHover:true,
		navigation : false,
		singleItem : true,
		pagination:false,
		transitionStyle : "fadeUp"
	});

});
   