$(document).ready(function () {
    $("#menu").click(function () { 
        $("#ul-tag").slideDown(400);
        $("#close").css("display", "flex");
        $("#menu").css("display", "none");
    });
    $("#close").click(function () { 
        $("#ul-tag").slideUp(400);
        $("#close").css("display", "none");
        $("#menu").css("display", "flex");
    });
});