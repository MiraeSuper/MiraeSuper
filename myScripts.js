$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#img1").show();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
    $("#img7").hide();
    $("#img8").hide();
    $("#img9").hide();
    $("#img10").hide();
    $("#img11").hide();



    /*img1을 클릭했을 때 img2를 보여줌*/
    $("#img1").click(function(){
        $("#img1").hide();
        $("#img2").show();
    });

    $("#img2").click(function(){
        $("#img2").hide();
        $("#img3").show();
    });

    $("#img3").click(function(){
        $("#img3").hide();
        $("#img4").show();
    });
    
    $("#img4").click(function(){
        $("#img4").hide();
        $("#img5").show();
    });

    $("#img5").click(function(){
        $("#img5").hide();
        $("#img6").show();
        $("#img7").show();
    });

    $("#img7").click(function(){
        $("#img7").hide();
 
        $("#img8").show();
    });

    $("#img8").click(function(){
        $("#img6").hide();
        $("#img8").hide();
        $("#img9").show();
    });

    $("#img9").click(function(){
         $("#img10").show();
    });


});




