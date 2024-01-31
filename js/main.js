$(".openIcon").click(function (){
    $(".sideNav").css("left","0")
})

$(".awe").click(function(){
    $(".sideNav").css("left","-200px")
})


$(".all h3").click(function(){
    $(this).next().slideToggle()

    $(".all div").not($(this).next()).slideUp()
})

$("textarea").keyup(function(){
    let myLength= $(this).val().length;

    $("#number").text(
        100 - myLength
    )
})

// ==================COUNTER==========================
let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    $(".days").text(
        days < 10 ? `0${days}` : days
    )

    $(".hours").text(
        hours < 10 ? `0${hours}` : hours
    )

    $(".minutes").text(
        minutes < 10 ? `0${minutes}` : minutes
    )

    $(".seconds").text(
        seconds < 10 ? `0${seconds}` : seconds
    )


  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);