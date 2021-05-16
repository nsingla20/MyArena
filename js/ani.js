// let widh;
// var data;
// var slidex=0;
// document.addEventListener("DOMContentLoaded", function(){
//     widh=(document.getElementById("main")).offsetWidth;
//     data=document.getElementsByClassName("img");
//     for(var i=0;i<data.length;i++){
//         data[i].style.zIndex=String(i);
//     }
//     slidex=data.length-1;
//     myMove();
// });
// function myMove(){
//     if(slidex<0)slidex=data.length-1;
//     var pos=0;
//     var id=null;
//     clearInterval(id);
//     id=setInterval(frame,5);
    
//     function frame(){
//         if(pos==-1000){
//             clearInterval(id);
//         }else{
//             pos--;
//             data[slidex].left=pos+"px";
//         }
//     }
//     data[slidex].zIndex="0";
//     pos=--slidex;
//     while(slidex!=pos){
//         if(slidex<0){
//             slidex=data.length-1;
//             continue;
//         }
//         data[slidex].zIndex=String(Integer(data[slidex].zIndex)+1);
//     }
//     slidex--;
//     setTimeout(myMove,60);

// }
$('#back').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});