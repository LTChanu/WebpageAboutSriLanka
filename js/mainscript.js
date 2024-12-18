//////////////navigation/////////////////
var npo;
var nsh;
window.onload = function(){
    startScroll(0);
    startInscrip(0);
    starts();
    //document.footer.style.backgroundImage="url('img/TLI/0001.jpg')";
    startTIL();
    getscroll();
}

window.onscroll = function(){
    //document.body.style.backgroundImage = "url('img/TLI/0001.jpg')";
if(window.pageYOffset > npo){
        nsh=1;
        document.getElementById("navi").style.top=0;
        document.getElementById("navi").style.position="fixed";
        document.getElementById("nav").style.visibility="hidden";
    }else
    { if(document.body.style.backgroundColor != 'black'){
            nsh=0;
            document.getElementById("navi").style.position="sticky";
            document.getElementById("nav").style.color="blue";
            document.getElementById("nav").style.visibility="visible"; 
        }
    }
}

function show(){
    if(nsh==1){
        nsh=2;
        document.getElementById("nav").style.visibility="visible";
    }
}

function hide(){
    if(nsh==2){
        nsh=1;
        document.getElementById("nav").style.visibility="hidden";
    }
}

////////////////set scroll//////////////
id;
nid;
function startScroll(y){
    id = setInterval(function() {
        window.scrollTo(0, y);
        if (window.scrollY == y) {
             stopScroll();
        }
    },0);
}

function stopScroll() {
    clearInterval(id);
}



function startInscrip(y){
    nid = setInterval(function() {
        window.scrollTo(0, y);
        if (window.scrollY == y) {
            npo = navi.offsetTop+40;
            stopInscrip();
        }
    },100);
}

function stopInscrip() {
    clearInterval(nid);
}






// ///////////////////////////TIMELAP///////////////////////////////////////

// tilid;
// tlid;

// function startTIL(){
    
//     tilid = setInterval(function() {
//         stopTIL();
//     },7000);

// }

// function stopTIL(){
//     clearInterval(tilid);
//     playTIL();
    
// }



// function playTIL(){

//     i = 0;
//     tlid = setInterval(function() {
        
//         i++;
//         if(i<10){
//             u = "000" + i;
//         }else if(i<100){
//             u = "00" + i;
//         }
//         else if(i<354){
//             u = "0" + i;
//         }else if(i==354){
//             u = "0" + i;
//             pauseplayTIL();
//         }
        
//         imgurl = "url('img/TLI/" + u +".jpg')";

//         document.getElementById("fot").style.backgroundImage =imgurl;
//     },15);
// }

// function pauseplayTIL(){
//     clearInterval(tlid);
//     startTIL();
    
// }