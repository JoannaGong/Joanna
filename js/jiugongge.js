var arr = [0, 1, 2, 4, 7, 6, 5, 3],
    speed = 100,
    n = 0,
    cycle = 4,
    num = randomNum(1, 9);

$('.start').click(function(){
    start();
})

function start(){
    var timer = setTimeout(turn, speed);
    function turn(){
        var index = arr[n++%8];
        $('li').removeClass('current').eq(index%8).addClass('current');
        
        if(n/8 < 4){
            timer = setTimeout(turn, speed);
        }else if(n/8 >= 4 && n<32+num){
            speed += 50;
            timer = setTimeout(turn, speed);
        }else if(n >= 32+num){
            return resultShow();
        }
    }
}

function randomNum(min, max){
    return parseInt(Math.random()*(max-min) + min)
}

function resultShow(){
    $(".result").css("display", "block");
    switch ( n%8 ) {
        case 1:
        $('.result').text("金币+20");
        break;
        case 2:
        $('.result').text("5元现金券");
        break;
        case 3:
        $('.result').text("10元现金券");
        break;
        case 4:
        $('.result').text("金币+50");
        break;
        case 5:
        $('.result').text("30元现金券");
        break;
        case 6:
        $('.result').text("金币+100");
        break;
        case 7:
        $('.result').text("谢谢参与");
        break;
        case 8:
        $('.result').text("15元现金券");
    }
}