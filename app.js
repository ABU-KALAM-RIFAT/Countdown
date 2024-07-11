var countDownDate = new Date('July 20, 2024 11:30:00').getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("demo").innerHTML = days ;
    document.getElementById("demo1").innerHTML = hours ;
    document.getElementById("demo2").innerHTML = minutes ;
    document.getElementById("demo3").innerHTML = seconds ;
    if (distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Expired";
    }
},1000);