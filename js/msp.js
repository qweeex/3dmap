$(document).ready(() => {

    let config = {
        layers: {
            level_zero: 300,
            level_one: 200,
            level_two: 50,
            level_three: -50
        }
    };



    $('.level-3').on('click', (e) => {
        $('.level-0').css('top', 1300);
        $('.level-1').css('top', 1000);
        $('.level-2').css('top', 900);
        $('.level-3').addClass('layers-active');
    });
    $('.level-2').on('click', (e) => {
        $('.level-0').css('top', 1300);
        $('.level-1').css('top', 1000);
        $('.level-3').css('top', -900);
        $('.level-2').addClass('layers-active');
    });
    $('.level-1').on('click', (e) => {
        $('.level-0').css('top', 1300);
        $('.level-2').css('top', -1000);
        $('.level-3').css('top', -900);
        $('.level-1').addClass('layers-active');
    });
    $('.level-0').on('click', (e) => {
        $('.level-1').css('top', -1300);
        $('.level-2').css('top', -1000);
        $('.level-3').css('top', -900);
        $('.level-0').addClass('layers-active');
    });
    
    $('.map-control__all').on('click', () => {
        $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-out');
        $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-active');
        $('.level-1').css('top', config.layers.level_one);
        $('.level-2').css('top', config.layers.level_two);
        $('.level-3').css('top', config.layers.level_three);
        $('.level-0').css('top', config.layers.level_zero);
    });

    $('a.shop').on('click', (e) => {
       e.preventDefault();
       let level = parseInt(e.target.dataset.level);
       ActiveLevel(level);
    });

    $('.st1, .cls-2').on('click', () => {
       $('.map-popup').show();
    });

    $('.card-close__btn').on('click', (e) => {
       e.preventDefault();
        $('.map-popup').hide();
    });

    function ActiveLevel(num) {
        $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-out');
        $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-active');
        $('.level-1').css('top', config.layers.level_one);
        $('.level-2').css('top', config.layers.level_two);
        $('.level-3').css('top', config.layers.level_three);
        $('.level-0').css('top', config.layers.level_zero);
        switch (num) {
            case 0:
                $('.level-1').css('top', -1300);
                $('.level-2').css('top', -1000);
                $('.level-3').css('top', -900);
                $('.level-0').addClass('layers-active');
                break;
            case 1:
                $('.level-0').css('top', 1300);
                $('.level-2').css('top', -1000);
                $('.level-3').css('top', -900);
                $('.level-1').addClass('layers-active');
                break;
            case 2:
                $('.level-0').css('top', 1300);
                $('.level-1').css('top', 1000);
                $('.level-3').css('top', -900);
                $('.level-2').addClass('layers-active');
                break;
            case 3:
                $('.level-0').css('top', 1300);
                $('.level-1').css('top', 1000);
                $('.level-2').css('top', 900);
                $('.level-3').addClass('layers-active');
                break
        }
    }


});