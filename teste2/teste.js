$(document).ready(function(){
    var $InputLogin = $("#login");
$InputLogin.click(function(){
if ($InputLogin.hasClass("dourado"))
    $InputLogin.addClass("branco").removeClass("dourado");
else
    $InputLogin.addClass("dourado").removeClass("branco");
});
})
