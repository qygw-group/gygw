
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
            if(index == 5){
                $('.section5').find('#lbw-data_table').delay(200).css({
                    transform: 'rotateX(0deg)'
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
            if(index == 5){
                $('.section5').find('#lbw-data_table').delay(200).css({
                    transform: 'rotateX(40deg)'
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


    //画布圆
        var c = document.getElementById('c'),
            ctx = c.getContext('2d'),
            cw = c.width = 250,
            ch = c.height = 220,
            rand = function (a, b) {
                return ~~((Math.random() * (b - a + 1)) + a);
            },
            dToR = function (degrees) {
                return degrees * (Math.PI / 180);
            },
            circle = {
                x: (cw / 2) - 15,
                y: (ch / 2) - 5,
                radius: 100,
                speed: 2,
                rotation: 0,
                angleStart: 270,
                angleEnd: 0,
                hue: 200,
                thickness: 0.1,
                blur:1
            },
            particles = [],
            particleMax = 10,
            updateCircle = function () {
                if (circle.rotation < 360) {
                    circle.rotation += circle.speed;
                } else {
                    circle.rotation = 0;
                }
            },
            renderCircleBorder = function () {
                ctx.save();
                ctx.translate(circle.x, circle.y);
                ctx.rotate(dToR(circle.rotation));
                ctx.beginPath();
                ctx.arc(0, 0, circle.radius + (circle.thickness / 3), dToR(circle.angleStart), dToR(circle.angleEnd), true);
                ctx.lineWidth = 2;
                ctx.strokeStyle = gradient2;
                ctx.stroke();
                ctx.restore();
            },
            renderCircleFlare = function () {
                ctx.save();
                ctx.translate(circle.x, circle.y);
                ctx.rotate(dToR(circle.rotation + 185));
                ctx.scale(1, 1);
                ctx.beginPath();
                ctx.arc(0, circle.radius, 5, 0, Math.PI * 2, false);
                ctx.closePath();
                var gradient3 = ctx.createRadialGradient(0, circle.radius, 0, 0, circle.radius, 50);
                gradient3.addColorStop(0, 'hsla(200, 100%, 100%, .15)');
                gradient3.addColorStop(1, 'hsla(200, 100%, 100%, 0)');
                ctx.fillStyle = gradient3;
                ctx.fill();
                ctx.restore();
            },

            clear = function () {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.fillStyle = 'rgba(0, 0, 0, .1)';
                ctx.fillRect(0, 0, cw, ch);
                ctx.globalCompositeOperation = 'lighter';
            }
        loop = function () {
            clear();
            updateCircle();
            //renderCircle();
            renderCircleBorder();
            renderCircleFlare();
            //renderCircleFlare2();
            //createParticles();
            //updateParticles();
            //renderParticles();
        };
    var gradient1 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient1.addColorStop(0, 'hsla(' + circle.hue + ', 100%, 100%, 0)');
    gradient1.addColorStop(1, 'hsla(' + circle.hue + ', 100%, 100%, 0)');

    var gradient2 = ctx.createLinearGradient(0, -circle.radius, 0, circle.radius);
    gradient2.addColorStop(0, 'hsla(' + circle.hue + ', 100%, 100%, .25)');
    gradient2.addColorStop(.1, 'hsla(' + circle.hue + ', 100%, 100%, .7)');
    gradient2.addColorStop(1, 'hsla(' + circle.hue + ', 100%, 100%, .25)');

    /* Loop It, Loop It Good */
    setInterval(loop, 16);

});
