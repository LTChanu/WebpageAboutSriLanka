///////////////////////////TIMELAP///////////////////////////////////////

tilid;
tlid;

function startTIL(){
    
    tilid = setInterval(function() {
        stopTIL();
    },7000);

}

function stopTIL(){
    clearInterval(tilid);
    playTIL();
    
}



function playTIL(){

    i = 0;
    tlid = setInterval(function() {
        
        i++;
        if(i<10){
            u = "000" + i;
        }else if(i<100){
            u = "00" + i;
        }
        else if(i<354){
            u = "0" + i;
        }else if(i==354){
            u = "0" + i;
            pauseplayTIL();
        }
        
        imgurl = "url('img/TLI/" + u +".jpg')";

        document.getElementById("fot").style.backgroundImage =imgurl;
    },15);
}

function pauseplayTIL(){
    clearInterval(tlid);
    startTIL();
    
}
///////////////////////////////////////////////////////////////////////////////