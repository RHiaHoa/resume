const menuBtn = document.querySelector('.menu-btn');
const array_sub_manu = ["collapse-sub-home", "collapse-sub-profile", "collapse-sub-education", "collapse-sub-skill", "collapse-sub-contact"];
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


$(window).resize(function () {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var dropdown_header_div = document.getElementsByClassName("dropdown-header-div")

  console.log("width = " + windowWidth);
  console.log("height = " + windowHeight);

  if (windowWidth > 992) {
    menuBtn.classList.remove('open');
    menuOpen = false;
    document.getElementById('res-header').classList.remove("show");
    document.getElementById('dropdown-home').classList.remove("show");
    dropdown_header_div[0].classList.remove("d-none");
  }

  if (windowWidth < 992) {
    dropdown_header_div[0].classList.add("d-none");
    const array_bt_header = ["bt-profile-header", "bt-edcation-header", "bt-skill-header", "bt-contact-header"];
    for (let i = 0; i < array_bt_header.length; i++) {
      document.getElementById(array_bt_header[i]).classList.remove("show");
    }
    for (let i = 0; i < array_sub_manu.length; i++) {
      document.getElementById(array_sub_manu[i]).classList.remove("show");
      console.log(array_sub_manu[i])
    }
  }
});


$("#bt-manu-res").on("click", function () {
  for (let i = 0; i < array_sub_manu.length; i++) {
    document.getElementById(array_sub_manu[i]).classList.remove("show");
    console.log(array_sub_manu[i])
  }
});
