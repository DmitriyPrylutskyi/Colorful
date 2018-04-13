/*Global variables*/
var errorsMsg;

function smoothScroll() {
    $('.smoothscroll').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href');
        var topOffset = $(id).offset().top;
        $('body,html').animate({scrollTop: topOffset}, 1500);
    });

}

function menuScroll() {
    $(window).on('scroll', function () {
        var topScroll = $('.menu_button').offset().top + 50;
            heightHome = $('.acquaintance').height();
        if ( topScroll > heightHome ) {
            $('.menu_button').css('backgroundColor', 'rgba(0,0,0,0.1)');
        } else {
            $('.menu_button').css('backgroundColor', 'rgba(0,0,0,0)');
        }
    });
}

function setMenuLeft() {
    var width = $('.menu').innerWidth();
    $('.menu').css('left', '-'+width+'px');
}

function toggleMenu() {
    $('.menu_button').on('click', function () {
        var width = $('.menu').innerWidth();
        $(this).toggleClass('open');
        if ( $('.menu').css('left') == '0px' ) {
            $('.menu').css('left', '-'+width+'px');
            $('.content').css('left', '0');
        } else {
            $('.menu').css('left', '0');
            $('.content').css('left', width);
        }
    });
}

function setSlides() {
    $("#slides").slidesjs({
        navigation: {
            active: false,
        },
        play: {
            interval: 5000,
            auto: true,
            pauseOnHover: true
        },
        responsive: false,
    });
}

function changeBackgroundColorPanelCollapse() {
    $('.panel .collapsed').click(function () {
        var that = this;
        setTimeout(function() {
            if ( $(that).parents('.panel').find('.in').length != 0 ) {
                $(that).parents('.panel').css({'backgroundColor': '#d93831'});
            } else {
                $(that).parents('.panel').css({'backgroundColor': '#ff4538'});
            }
        },500);
    });
}

function carousel() {
    $('.carousel-partfolio').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.carousel-partners').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
}

function setWidthBlogInfo() {
    $('.info-hover').width($('.blog-info img').width());
}

function isHover() {
    $('.blog article').hover(
        function() {
            $( this ).find('.info-hover').addClass('show');
        }, function() {
            $( this).find('.info-hover').removeClass('show');
        }
    );
}

function showButtonTopPage() {
    if ( $(document).scrollTop() + 200 > $(window).height() ) {
        $('.top-page').addClass('show-button');
    } else {
        $('.top-page').removeClass('show-button');
    };
}

function parallax(elementSelector, step) {
    var elem = $(elementSelector),
        scrollPosition = $(window).scrollTop(),
        elemOffsetTop = elem.parent().offset().top,
        delta = 0,
        yPos;

    delta = (scrollPosition - elemOffsetTop);
    yPos = Math.round((delta / 6) * step);
    elem.css('transform', 'translateY(' + yPos + 'px)');
}

function initMap() {
    var styles = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#212121"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#181818"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#1b1b1b"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#373737"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#3c3c3c"
                }
            ]
        },
        {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#4e4e4e"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#3d3d3d"
                }
            ]
        }
    ];

    var mapOptions = {
        center: new google.maps.LatLng(55.864246, -4.251792),
        zoom: 12,
        zoomControl: false,
        fullscreenControl: false,
        panControl: false,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControl: false,
        styles: styles
    };
    var image = './img/marker.png';
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    new google.maps.Marker({
        position: new google.maps.LatLng(55.864246, -4.251792),
        title: 'COLORFUL FLAT',
        icon: image,
        map: map
    });
}

function validate(formId) {
    errorMsg = 'required';

    $(formId + ' input[type="tel"]').keyup(function () {
        var $input = $(this),
            $errorMsg = $input.nextAll('.error-msg'),
            regex = /^[\d- ]+$/,
            str = $input.val();
        if (regex.exec(str) == null) {
            $input.val(str.slice(0, -1));
            errorMsg = 'incorrect phone';
        } else {
            errorMsg = '';
        }

        if (errorMsg) {
            $input.css({'borderColor': 'red'});
            $errorMsg.text(errorMsg);
        } else {
            $input.css({'borderColor': '#cccccc'});
            $errorMsg.text('');
        }
    });

    $(formId + ' input').blur(function () {
        var $input = $(this),
            str = $input.val(),
            $errorMsg = $input.nextAll('.error-msg');

        if ( $input.prop( 'required' ) && str == '') {
            $input.removeClass('full');
            errorMsg = 'required';
        } else {
            $input.addClass('full');
            errorMsg = '';
        }

        if ($input.attr('type') == 'email' && str != '') {
            var regex = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;

            if (regex.exec(str) == null) {
                errorMsg = 'incorrect email';
            }
        }

        if ( $input.attr('type') == 'tel' && str != '' && str.length < 6 ) {
            errorMsg = 'incorrect phone';
        }

        if (errorMsg) {
            $input.css({'borderColor': 'red'});
            $errorMsg.text(errorMsg);
        } else {
            $input.css({'borderColor': '#cccccc'});
            $errorMsg.text('');
        }
    })
}

function formSubmit(formId) {
    $(formId + ' button').click(function(e) {
        e.preventDefault();
        var formData = $(formId).serialize();
        var msg = $('.msg');
        var msgText = $('#msg-text');

        $(formId + ' input').each(function() {
            var $errorMsg = $(this).nextAll('.error-msg');
            if ( $(this).prop( 'required' ) && $(this).val() == '' ) {
                errorMsg = 'required';
                $(this).css({'borderColor': 'red'});
                $errorMsg.text(errorMsg);
            }
        });

        errorMsg = ($(formId).find('.error-msg').text());

        if ( errorMsg ) {
            msgText.remove();
            msg.prepend('<span id="msg-text">Correct the errors and resubmit the form.</span>');
            msg.addClass('fail');
            closeMsg();
            return;
        } else {
            msg.removeClass('fail');
        }
        $.ajax({
            type: 'POST',
            url: 'smtp-email-sender.php',
            data: formData,
            success: function(response) {
                $(formId).trigger("reset");
                $(formId +' input').each(function() {
                    $(this).removeClass('full');
                });
                msgText.remove();
                msg.prepend('<span id="msg-text">Thank you! We\'ll certainly call You back.</span>');
                msg.addClass('success');

            },
            error: function(data) {
                msgText.remove();
                msg.prepend('<span id="msg-text">The message could not be sent. Try it again.</span>');
                msg.addClass('fail');
            }
        });

        closeMsg();
    })
}

function closeMsg() {
$('#close').click(function (e) {
        var msg = $('.msg'),
            msgText = $('#msg-text');
        msgText.remove();
        msg.removeClass('success fail');
    });
}

function initEvents() {
    /*Actions on 'DOM ready' event*/
    $(function() {
        function isMobileDeviceUsed() {
            var isMobile = false;
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;
            return isMobile;
        }

        setMenuLeft();
        menuScroll();
        smoothScroll();
        showButtonTopPage();
        toggleMenu();
        setSlides();
        changeBackgroundColorPanelCollapse();
        carousel();
        isHover();
        setWidthBlogInfo();
        validate('#contact-form');
        formSubmit('#contact-form');
    });

    /*Actions on 'Window load' event*/
    $(window).on("load", function() {
        
    });

    $(window).resize(setWidthBlogInfo);

    $(window).scroll(function(){
        parallax('.acquaintance .background', 2);
        showButtonTopPage();
    });
};

/*Start all functions and actions*/
initEvents();