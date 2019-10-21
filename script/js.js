$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".food-delivery").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.food-delivery').click(function() {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});
