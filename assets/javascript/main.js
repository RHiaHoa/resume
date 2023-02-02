$('.menu-btn').on("click", function () {
    $('.Headers-maindiv').toggleClass('Headers-maindiv-res');
    $('.magin-fake-headder').toggleClass('magin-fake-headder-active');
});


$(window).resize(function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

});

// activeScroll()
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    var headder_bar = document.getElementsByClassName("Headers-maindiv")
    var headder_baras_fake = document.getElementsByClassName("magin-fake-headder")
    var text_menu_banner = document.getElementsByClassName("text_menu_banner")
    var icon_menu_banner = document.getElementsByClassName("icon_menu_banner")
    var img_logo = document.getElementsByClassName("img-logo")
    var dropdown_header = document.getElementsByClassName("dropdown-header")
    var dropdown_menu = document.getElementsByClassName("dropdown-menu-div")
    var windowWidth = $(window).width();
    console.log("Scroll = " + scroll)

    if (scroll > 0 && windowWidth > 992) {
        headder_bar[0].classList.add("shadow-sm", "Headers-maindiv-active");
        headder_baras_fake[0].classList.add("magin-fake-headder-active")
        document.getElementById("dropdown-home").classList.add("dropdown-header-div-active");
        dropdown_header[0].classList.add("dropdown-header-active", "shadow-sm")

        img_logo[0].classList.add("d-none");
        img_logo[1].classList.remove("d-none");

        let i_text = 0;
        for (; i_text < 5; i_text++) {
            text_menu_banner[i_text].classList.add("color-3d3d3d");
        }

        let i_icon = 0;
        for (; i_icon < 3; i_icon++) {
            icon_menu_banner[i_icon].classList.add("color-3d3d3d");
        }

        let i_menu = 0;
        for (; i_menu < 3; i_menu++) {
            dropdown_menu[i_menu].classList.add("dropdown-menu-div-active");
        }

    } else {
        headder_bar[0].classList.remove("shadow-sm", "Headers-maindiv-active");
        headder_baras_fake[0].classList.remove("magin-fake-headder-active")
        document.getElementById("dropdown-home").classList.remove("dropdown-header-div-active");

        img_logo[0].classList.remove("d-none");
        img_logo[1].classList.add("d-none");

        let i_text = 0;
        for (; i_text < 5; i_text++) {
            text_menu_banner[i_text].classList.remove("color-3d3d3d");
        }

        let i_icon = 0;
        for (; i_icon < 3; i_icon++) {
            icon_menu_banner[i_icon].classList.remove("color-3d3d3d");
        }

        let i_menu = 0;
        for (; i_menu < 3; i_menu++) {
            dropdown_menu[i_menu].classList.remove("dropdown-menu-div-active");
        }

    }
});

$("#img-logo").on("click", function () {
    $('html, body').animate({
        scrollTop: $("#area-home").offset().top
    }, 200);
});

$("#bt-dropdown-home").on("click", function () {
    $('html, body').animate({
        scrollTop: $("#area-home").offset().top
    }, 200);
});


// onclick bt-header

$("#bt-home-header").on("click", function () {
    const array_bt_header = ["bt-profile-header", "bt-edcation-header", "bt-skill-header", "bt-contact-header"];
    for (let i = 0; i < array_bt_header.length; i++) {
        document.getElementById(array_bt_header[i]).classList.remove("show");
    }
});

$("#bt-profile").on("click", function () {
    const array_bt_header = ["dropdown-home", "bt-edcation-header", "bt-skill-header", "bt-contact-header"];
    for (let i = 0; i < array_bt_header.length; i++) {
        document.getElementById(array_bt_header[i]).classList.remove("show");
    }
});

$("#bt-skill").on("click", function () {
    const array_bt_header = ["bt-profile-header", "bt-edcation-header", "dropdown-home", "bt-contact-header"];
    for (let i = 0; i < array_bt_header.length; i++) {
        document.getElementById(array_bt_header[i]).classList.remove("show");
    }
});

$("#bt-edcation").on("click", function () {
    const array_bt_header = ["bt-profile-header", "dropdown-home", "bt-skill-header", "bt-contact-header"];
    for (let i = 0; i < array_bt_header.length; i++) {
        document.getElementById(array_bt_header[i]).classList.remove("show");
    }
});

$("#bt-contact").on("click", function () {
    const array_bt_header = ["bt-profile-header", "bt-edcation-header", "bt-skill-header", "dropdown-home"];
    for (let i = 0; i < array_bt_header.length; i++) {
        document.getElementById(array_bt_header[i]).classList.remove("show");
    }
});

// end onclick bt-header


// waypoint
var waypoint = new Waypoint({
    element: document.getElementById('area-2'),
    handler: function (direction) {
        $("#bt-dropdown-home").removeClass("li_margin-active");
        if (direction == "up") {
            $("#bt-dropdown-home").addClass("li_margin-active");
        }

    }
})
// end waypoint