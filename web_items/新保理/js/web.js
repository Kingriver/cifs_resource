
$(function(){ 
    //header
    $(window).scroll(function(){
        if($(window).scrollTop()>$(window).height()/4){
            $('header').addClass('header_change');
        }else{
            $('header').removeClass('header_change');
        }
    });

    //nav_btn 移动端导航按钮
    $(".nav_btn").click(function(){
        console.log('1')
        $(this).toggleClass("nav_btn_active");
        $(".nav_list").slideToggle(250);
    });
    $(".nav_list li").each(function( index ) {
        $( this ).css({'animation-delay': (index/10)+'s'});
    }); 

	//backtop 返回顶部按钮
    $(window).scroll(function() {
        if($(window).scrollTop() >= $(window).height()){
            $('.back_top').fadeIn(500);
        }else{
            $('.back_top').fadeOut(500);
        }
    });
    $('.back_btn').click(function(){
        $('html,body').animate({scrollTop: '0'}, 800);
    });


  
	
	
});

 