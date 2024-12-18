function starts(){
    document.getElementById("nav").style.visibility='hidden';
    document.getElementById("top").style.visibility= 'hidden';
    document.getElementById("content").style.visibility='hidden';
    document.body.style.cursor='none';
    document.getElementById("back").style.visibility='hidden';
    popup();
}

function popup(){
    document.body.style.position='fixed';
    document.body.style.backgroundSize='100px';
    document.body.style.backgroundPosition='top';
    document.querySelector("body").style.backgroundColor='black';
    document.body.style.backgroundImage = "url('img/Welcome.jpg')";
    startZoom(1550);
}

function pageload(){
    document.getElementById("back").style.visibility='visible';
    document.body.style.position='absolute';
    document.body.style.backgroundPosition='auto';
    document.body.style.backgroundSize='auto';
    document.querySelector("body").style.backgroundColor= null;
    document.body.style.backgroundImage = null;
    document.getElementById("navi").style.visibility='visible';
    document.getElementById("top").style.visibility= 'visible';
    document.getElementById("content").style.visibility='visible';
    document.body.style.cursor='auto';
    document.getElementById("nav").style.visibility='visible';
}



////////////////      set intervel       ////////////////////////////////////////////
zid;
fid;
sid;
var size;
var p;
function startZoom(y){
    size=0;
    p = "px";
    zid = setInterval(function() {
        var si =size+p;
        document.body.style.backgroundSize= si;
        if (size == y) {
             stopZoom();
        }else{
            size+=5;
        }
    },1);
}

function stopZoom() {
    clearInterval(zid);

    fid = setInterval(function() {
        window.scrollTo(0,0);
        pageload();
        stopFinal();
    },800);
}

function stopFinal(){
    clearInterval(fid);
}
//////////////////////////////////////////////////////////////////////////////////////


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
