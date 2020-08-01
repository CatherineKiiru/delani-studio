$(document).ready(function(){
    $("img").click(function(){
        $(".clickable").toggle();  
    });
    $("porfolio").hover(function(){
        $("portfolio").css("background-color", "yellow")
        }, function(){
            $("portfolio").css("background-color","pink")

});
});
