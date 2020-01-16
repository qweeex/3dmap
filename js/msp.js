$(document).ready(() => {

    let config = {
        layers: {
            level_zero: 300,
            level_one: 200,
            level_two: 50,
            level_three: -50
        }
    };
    var store;


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

    function ShowCard(img){

    }

   let map = new Vue({
        el: '#list',
        data: {
            shop: {}
        },
        mounted(){
            this.getShop();
        },
        methods: {
            getShop: function () {
                $.getJSON('/shop.json', function(data){
                   map.shop = data.shop;
                });
            },
            GetLevel: function (level, image, phone, name, cat, lev) {
                ActiveLevel(level);
                $('.card-image a img').attr('src', image);
                $('.card-title p').text(name);
                $('.card-category p').text(cat);
                $('.card-floor p').text(lev);
                $('.card-phone a').text(phone);
                $('.map-popup').show();
            },
            ViewLayers: function () {
                $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-out');
                $('.level-0, .level-1, .level-2, .level-3').removeClass('layers-active');
                $('.level-1').css('top', config.layers.level_one);
                $('.level-2').css('top', config.layers.level_two);
                $('.level-3').css('top', config.layers.level_three);
                $('.level-0').css('top', config.layers.level_zero);
            }
        }
    })
});