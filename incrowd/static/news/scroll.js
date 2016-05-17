$(document).ready(function(){
    var firstArticles = $('#articles1').height();
    var secondArticles = $('#articles2').height();
    var thirdArticles = $('#articles3').height();
    var fourthArticles = $('#articles4').height();
    var fifthArticles = $('#articles5').height();

    var windowHeight = $(window).height();

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= firstArticles - windowHeight){
            $("#loading").text("Loading...");
            setTimeout(function(){
                $("#loading").detach();
                $("#articles2").removeClass('hidden');
            }, 2000);
        }

        if (scrollTop >= (firstArticles + secondArticles) - windowHeight){
            $("#loading2").text("Loading...");
            setTimeout(function(){
                $("#loading2").detach();
                $("#articles3").removeClass('hidden');
            }, 2000);
        }

        if (scrollTop >= (firstArticles + secondArticles + thirdArticles) - windowHeight){
            $("#loading3").text("Loading...");
            setTimeout(function(){
                $("#loading3").detach();
                $("#articles4").removeClass('hidden');
            }, 2000);
        }

        if (scrollTop >= (firstArticles + secondArticles + thirdArticles + fourthArticles) - windowHeight){
            $("#loading4").text("Loading...");
            setTimeout(function(){
                $("#loading4").detach();
                $("#articles5").removeClass('hidden');
            }, 2000);
        }

         if (scrollTop >= (firstArticles + secondArticles + thirdArticles + fourthArticles + fifthArticles) - windowHeight){
            setTimeout(function(){
                $("#finish").text("Sorry. There are no more results.");
            }, 1500);
        }

        else {
        }
    });

});







//    $("li.last:last-child").hover(function(){
//        $("#loading").text("Loading...");
//        setTimeout(function(){
//            $("#loading").detach();
//            $("#articles2").removeClass('hidden');
//            }, 2000);
////        $("#articles2").removeClass('hidden');
//    });
//
//    $("li.last-two:last-child").hover(function(){
//        $("#loading2").text("Loading...");
//        setTimeout(function(){
//            $("#loading2").detach();
//            $("#articles3").removeClass('hidden');
//            }, 2000);
//    });
//
//    $("li.last-three:last-child").hover(function(){
//        $("#loading3").text("Loading...");
//        setTimeout(function(){
//            $("#loading3").detach();
//            $("#articles4").removeClass('hidden');
//            }, 2000);
//    });
//
//    $("li.last-four:last-child").hover(function(){
//        $("#loading4").text("Loading...");
//        setTimeout(function(){
//            $("#loading4").detach();
//            $("#articles5").removeClass('hidden');
//            }, 2000);
//    });
//
//    $("li.last-five:last-child").hover(function(){
//        setTimeout(function(){
//            $("#finish").text("Sorry. There are no more results.");
//            }, 500);
//    });


