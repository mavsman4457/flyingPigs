var pigs = new Array();
var showing = new Array(0, 0, 0, 0, 0, 0);

$(document).ready(function(){
    $(document).keyup(function(e){
        var key = e.which;
        var actualKey = null;
        //sets the actual key to what is shown on the keyboard
        switch(key)
        {
            case 48:
                actualKey = 0;
                break;
            case 49:
                actualKey = 1;
                break;
            case 50:
                actualKey = 2;
                break;
            case 51:
                actualKey = 3;
                break;
            case 52:
                actualKey = 4;
                break;
            case 53:
                actualKey = 5;
                break;
            case 54:
                actualKey = 6;
                break;
        }
        var pigNum = actualKey-1;
        var topCoord = pigs[pigNum].offset().top;
        if(showing[pigNum] == 1){
            pigs[pigNum].offset({top:topCoord, left:-600});
            showing[pigNum] = 0;
            playSound('sounds/oink.mp3');
            showing[pigNum] = 2;                    
        }
    });
});

function playSound(soundfile) {
    document.getElementById("dummy").innerHTML=
    "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}


$(document).ready(function(){
    pigs[0] = $('#one');
    pigs[1] = $('#two');
    pigs[2] = $('#three');
    pigs[3] = $('#four');
    pigs[4] = $('#five');
    pigs[5] = $('#six');
    for(var i = 0; i < pigs.length; i++)
    {
        scrollPig(i);
    }
});


function scrollPig(pigNum){
    setInterval(function(){
        if(pigs[pigNum].offset().left > 600){
            rollBack(pigNum);
        } else if(pigs[pigNum].offset().left < 600 && pigs[pigNum].offset().left > -40) {
            showing[pigNum] = 1;
        }
        pigs[pigNum].animate({
            left : "+=10"
        },{ duration: 200, queue: false });
    },200);
}

function rollBack(pigNum){
    var topCoord = pigs[pigNum].offset().top;
    pigs[pigNum].offset({top:topCoord, left:-600});
    showing[pigNum] = 0;
}