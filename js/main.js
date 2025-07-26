$(function() {
    $(".humburger").click(function() {
        $(this).toggleClass("active");
        $("#header .navi").toggleClass("active");
    });
    $(".navi a").click(function() {
        $(".humburger").removeClass("active");
        $("#header .navi").removeClass("active");
    });
});
