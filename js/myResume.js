$(function(){
  $('#dowebok').fullpage({
    afterLoad: function(anchorLink, index){
      if(index == 2){
        $('.op').css('opacity',1);
        $('.myPhotograph').css('left',0);
        $('.myIntroduce').css('left',0);
      }
      if(index == 3){
        $('.skillCon').css('opacity',1);
        canVas();
        Css();
        JS()
        jq();
      }
      if(index == 4){
        $('.project  dd').addClass('key1');
      }
    },
    onLeave: function(index, direction){
      if(index == '2'){
        $('.op').css('opacity',0);
        $('.myPhotograph').css('left','-100%');
        $('.myIntroduce').css('left','100%');
      }
      if(index == '3'){
        $('.skillCon').css('opacity',0);
      }
      if(index == '4'){
        $('.project  dd').removeClass('key1');
        console.log($('.p1')[0].src);
      }
    }

  });
});
function canVas (){
  var canvashtml5 = document.getElementById("html5").getContext("2d");
  canvashtml5.lineWidth = 10;
  canvashtml5.strokeStyle='#F1652A';
  var degree=0;//角度
  var timer=setInterval(function(){
    degree+=3;
    if (degree>=0.8*360) {
      clearInterval(timer);
      return degree;
    };
    canvashtml5.beginPath();
    canvashtml5.arc(80,80,70,-Math.PI/2,degree*Math.PI/180-Math.PI/2);
    canvashtml5.stroke();
  },20);
}
function Css(){
  var canvascss = document.getElementById("css3").getContext("2d");
  canvascss.lineWidth = 10;
  canvascss.strokeStyle='#409AD8';
  var degree=0;//角度
  var timer=setInterval(function(){
    degree+=3;
    if (degree>=0.8*360) {
      clearInterval(timer);
      return degree;
    };
    canvascss.beginPath();
    canvascss.arc(80,80,70,-Math.PI/2,degree*Math.PI/180-Math.PI/2);
    canvascss.stroke();
  },20);
}
function JS(){
  var canvasjs = document.getElementById("JS").getContext("2d");
  canvasjs.lineWidth = 10;
  canvasjs.strokeStyle='#ECB12C';
  var degree=0;//角度
  var timer=setInterval(function(){
    degree+=3;
    if (degree>=0.7*360) {
      clearInterval(timer);
      return degree;
    };
    canvasjs.beginPath();
    canvasjs.arc(80,80,70,-Math.PI/2,degree*Math.PI/180-Math.PI/2);
    canvasjs.stroke();
  },20);
}

function jq(){
  var canvasjq = document.getElementById("jq").getContext("2d");
  canvasjq.lineWidth = 10;
  canvasjq.strokeStyle='#75B143';
  var degree=0;//角度
  var timer=setInterval(function(){
    degree+=3;
    if (degree>=0.8*360) {
      clearInterval(timer);
      return degree;
    };
    canvasjq.beginPath();
    canvasjq.arc(80,80,70,-Math.PI/2,degree*Math.PI/180-Math.PI/2);
    canvasjq.stroke();
  },20);
}

