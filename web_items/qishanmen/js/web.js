
//scrollT
function scrollT($Dom){
    if($(window).scrollTop()+$(window).height()>=$Dom.offset().top+200){
        return true;
    }
}  

document.body.addEventListener('touchstart', function(){});
 
$(function(){ 
	//lead
	$(".lead_txt li").each(function( index ) {
		$(this).find("em").addClass("wow flipInY").css({
			'animation-delay': (5+index/5)+'s',
			'animation-duration': 2 +'s'
		});
	});  
	 
	//f_menu02
    $(window).scroll(function() {
        if($(window).scrollTop() >= $(window).height()){
            $('.float_menu').fadeIn(500);
        }else{
            $('.float_menu').fadeOut(500);
        }
    });
    $('.f_menu02').click(function(){
        $('html,body').animate({scrollTop: '0'}, 800);

    });

    //header
    jQuery(window).scroll(function() {
        if(jQuery(window).scrollTop() >= $(window).height()/4){
            jQuery('header').addClass("header_scr");
        }else{
            jQuery('header').removeClass("header_scr");
        }
    });
    //menu_ico
    $(".menu_ico").click(function(){
        $(this).toggleClass("menu_active");
        $(".nav_list").slideToggle(250);
    });
    $(".nav_list li").each(function( index ) {
        $( this ).css({'animation-delay': (index/10)+'s'});
    });   
	
	/*footer*/ 
	 $(".WeChat_link").click(function(){
        $(".WeChat").fadeToggle(); 
    });
    $(".WeChat_bg").click(function(){
        $(".WeChat").fadeOut(); 
    });
	$(".WeChat_close").click(function(){
        $(".WeChat").fadeOut(); 
    });
	
	//nav_item0
    $('a.nav_item0[href*=#]').click(function(){
			$(".menu_ico").toggleClass("menu_active");
			if($(window).width()<=1199){
				$(".nav_list").slideToggle(250);
			}	 
			if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var $target = $(this.hash);
            var headerH = $("header").height();
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - headerH;
                $("a.nav_item0").parent("li").removeClass("nav_cur"); 
                $(this).parent("li").addClass("nav_cur"); 
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
	
	//wow
	if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		new WOW().init();
	};
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset:0,
		live: true,
		mobile: true
	});
	wow.init();
	
});

 