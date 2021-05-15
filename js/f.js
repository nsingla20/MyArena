var txt="Loading...";
var i=0;
var load;
var ifload = false;
function loadn(){
    ifload=true;
    load.innerHTML="Loading..." ;
}
function unload(){
    load.innerHTML="";
    ifload=false;
}
var bad;


window.onload = function(){
    bad = document.getElementById("backVid");
    if(screen.availWidth<=768){
        bad.remove();
    }
    load=document.getElementById("loading");
    bad.onprogress=loadn;
    bad.onplaying=unload;
}