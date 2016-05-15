$(document).ready(function(){

    $("li.last:last-child").hover(function(){
        $("#loading").text("Loading...");
        setTimeout(function(){
            $("#loading").detach();
            $("#articles2").removeClass('hidden');
            }, 2000);
//        $("#articles2").removeClass('hidden');
    });

    $("li.last-two:last-child").hover(function(){
        $("#loading2").text("Loading...");
        setTimeout(function(){
            $("#loading2").detach();
            $("#articles3").removeClass('hidden');
            }, 2000);
    });

    $("li.last-three:last-child").hover(function(){
        $("#loading3").text("Loading...");
        setTimeout(function(){
            $("#loading3").detach();
            $("#articles4").removeClass('hidden');
            }, 2000);
    });

    $("li.last-four:last-child").hover(function(){
        $("#loading4").text("Loading...");
        setTimeout(function(){
            $("#loading4").detach();
            $("#articles5").removeClass('hidden');
            }, 2000);
    });

    $("li.last-five:last-child").hover(function(){
        setTimeout(function(){
            $("#finish").text("Sorry. There are no more results.");
            }, 500);
    });








//        $("li.last").hover(function(){
////        var spinner = new Spinner().spin()
////        target.appendChild(spinner.el)
//        $("#articles2").show();
//    });
//
//    $("#container").scroll(function(){
//        $("#articles2").show();
//    });

//    $("#show").click(function(){
//        $("#articles2").show();
//    });
//
//    $("#show").click(function(){
//        $("#articles3").show();
//    });
//
//    $("#show").click(function(){
//        $("#articles4").show();
//    });
//
//    $("#show").click(function(){
//        $("#articles5").show();
//    });
//
//    $("#articles5").append("Sorry, there are no more results.");

});







//$(".container").scroll(function() {
////  $("#addition").append("<div>This is the extra text onScroll.</div>");
//  $("#addition").append($("#item2")).show().fadeIn();
//
//});
//$(window).scroll(function() {
//  if($(window).scrollTop() == $(document).height() - $(window).height()){
//      $("#add").hide().append($("#last")).fadeIn();
////    $(window).scrollTop($(window).scrollTop()-1);
//  }
//});