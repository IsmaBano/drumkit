var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var evt= this.innerHTML;
   sound(evt);
    });
}
document.addEventListener("keypress",function(event){
 sound(event.key);
});
 function sound(event){
switch(event){
    case "w":
        var aud1=new Audio("drumsong/war-drum-loop-103870.mp3");
        aud1.play();
        break;
    case "a":
        var aud2=new Audio("drumsong/Drum-Sticks-Hit-A-www.fesliyanstudios.com.mp3");
        aud2.play();
        break;
        case "s":
        var aud3=new Audio("drumsong/snare-beat-190050.mp3");
        aud3.play();
        break;
        case "d":
        var aud4=new Audio("drumsong/cinematic-trash-kick-loop-132274.mp3");
        aud4.play();
        break;
        case "j":
        var aud5=new Audio("drumsong/Floor-Tom-Drum-Hit-Level-1A-www.fesliyanstudios.com.mp3");
        aud5.play();
        break;
        case "k":
            var aud6=new Audio("drumsong/Floor-Tom-Drum-Hit-Level-2A-www.fesliyanstudios.com.mp3");
            aud6.play();
            break;
            case "l":
                var aud7=new Audio("drumsong/Floor-Tom-Drum-Hit-Level-3A-www.fesliyanstudios.com.mp3");
                aud7.play();
                break;
        default : console.log(event);
}
 }
 