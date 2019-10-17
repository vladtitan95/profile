$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".header__block").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.header__block').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});

function check() {
    var c = document.getElementsByName('checkbox');
    if (!c[0].checked) c[0].checked = true;

}
check();
