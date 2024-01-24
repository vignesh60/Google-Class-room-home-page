$(".img-container").css({marginLeft: "40rem", opacity: "0"});
$(".container").css({ marginTop: "-40rem", opacity: "0" });
setTimeout(function(){
      
      $(".img-container").animate({marginLeft: "0",opacity: "1"},1500);
      $(".container").animate({ marginTop: "0", opacity: "1" },1000);
});
