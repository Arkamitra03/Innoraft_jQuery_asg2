$(document).ready(function(){
    $("body").css("overflow-x","hidden");
    $("div").height("50px");
    $("div").width("100%");
    $("div").css("padding-top","0.5%");
    $("div").css("text-align","center");
    $("div").css("background-color","rgb(189, 247, 197)");
    $(".blue-box").height("230px");
    $(".blue-box").width("100%");
    $(".blue-box").css("background-color","rgb(156, 165, 246)");
    $(".blue-box").hide();
    $(".box").click(function(){
        $(this).css("cursor","pointer");
        $(".blue-box").slideDown();
    });
});