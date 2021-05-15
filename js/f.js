var txt="Loading...";
var i=0;
var load;
var ifload = false;
function loading(){
    if(!ifload)return;
    if (i < txt.length) {
        load.innerHTML += txt.charAt(i);
        i++;
        setTimeout(loading, 90);
    }else{
        load.innerHTML="";
        i=0;
        setTimeout(loading, 90);
    }
}
function loadn(){
    ifload=true;
    loading();
}
function unload(){
    i=0;
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
}