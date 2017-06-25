
$(function(){
    $('#lbw-dowebok').fullpage({
        afterLoad: function(anchorLink, index){
            if(index == 2){
                $('.section2').find('.img1').delay(200).animate({
                    left: '100px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.img2').delay(200).animate({
                    right: '100px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.img3').delay(100).animate({
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.img4').delay(200).animate({
                    top: '-10px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.num').delay(200).animate({
                    top: '180px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
            }
        },
        onLeave: function(index, direction){
            if(index == '2'){
                $('.section2').find('.img1').delay(200).animate({
                    left: '300px',
                    opacity: '0'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.img2').delay(200).animate({
                    right: '300px',
                    opacity: '0'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.img3').delay(100).animate({
                    opacity: '0'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.img4').delay(200).animate({
                    top: '500px',
                    opacity: '0'
                }, 1500, 'easeOutExpo');
                $('.section2').find('.num').delay(200).animate({
                    top: '690px',
                    opacity: '0'
                }, 1500, 'easeOutExpo');
            }

        },

        
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#menu',
        'navigation': true,
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
        centeredSlides: true,
        autoplay: 3500,
        autoplayDisableOnInteraction: false,
        effect: 'fade'
    });

});
