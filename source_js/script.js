// Write any custom javascript functions here
$(function () {
    // Set up smooth scrolling
    $('#nav-bar').find('a').click(function () {
        $('.menu-icon')[0].click();

        // Get the anchor
        var target = $(this.hash);
        if (target.length) {
            var destination = target.offset().top - $('#nav-bar').outerHeight();
            $('html, body').animate({
                scrollTop: destination + (destination > 100 ? 4 : 0)
            }, 500);

            return false;
        }
    });

    // Set up carousel
    $('#carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000
    });
});

$(window).scroll(function () {
    var scrollLocation = window.scrollY;
    var navBar = $('#nav-bar');

    if (scrollLocation > 100) {
        navBar.addClass('small');
    }
    else {
        navBar.removeClass('small');
    }

    navBar.find('a').each(function () {
        var target = $($(this).attr('href'));
        if (scrollLocation >= target.offset().top - navBar.outerHeight()
            && scrollLocation < target.offset().top - navBar.outerHeight() + target.outerHeight()
            && ($(document).height() - $(window).height()) > scrollLocation
            || ($(document).height() - $(window).height()) <= scrollLocation && $(this).attr('href') == '#video') {
            $(this).addClass('focus');
        }
        else {
            $(this).removeClass('focus');
        }
    });
}).scroll();