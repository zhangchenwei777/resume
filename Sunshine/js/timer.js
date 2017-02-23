/**
 * Created by bjwsl-001 on 2016/11/3.
 */
$(function(){
  var index = 0;
  var timer = setInterval(function(){
    if(index>=4){
      index=-1;
    }
    $('#home div.banner:eq('+index+')').addClass('active').removeClass('unactive');
    $('#home div.banner:eq('+index+')').siblings('div.banner').removeClass('active').addClass('unactive');
    $('#home div.banner:eq('+index+')').siblings('div.banner').children().children('h1').removeClass('key');
    $('#home div.banner:eq('+index+')').children().children('h1').addClass('key');
    $('#home div.banner:eq('+index+')').siblings('div.banner').children().children('h3').removeClass('key1');
    $('#home div.banner:eq('+index+')').children().children('h3').addClass('key1');
    $('.num li:eq('+index+')').siblings().removeClass('bg-color');
    $('.num li:eq('+index+')').addClass('bg-color');
    index++;
  },6000);
  $('ul.num').mouseover(function(){
    clearInterval(timer);
  });
  $('ul.num').mouseout(function(){
    timer = setInterval(function(){
      if(index>=4){
        index=-1;
      }
      $('#home div.banner:eq('+index+')').addClass('active').removeClass('unactive');
      $('#home div.banner:eq('+index+')').siblings('div.banner').removeClass('active').addClass('unactive');
      $('#home div.banner:eq('+index+')').siblings('div.banner').children().children('h1').removeClass('key');
      $('#home div.banner:eq('+index+')').children().children('h1').addClass('key');
      $('#home div.banner:eq('+index+')').siblings('div.banner').children().children('h3').removeClass('key1');
      $('#home div.banner:eq('+index+')').children().children('h3').addClass('key1');
      $('.num li:eq('+index+')').siblings().removeClass('bg-color');
      $('.num li:eq('+index+')').addClass('bg-color');
      index++;
    },6000);
  });
  //console.log(this.timer);
  //$('#home').hover(
  //  function(){
  //    //console.log(this.timer);
  //    clearInterval(timer);
  //
  //  },
  //  function(){
  //    timer = setInterval(function(){
  //      //console.log(index);
  //      if(index>=4){
  //        index=-1;
  //      }
  //      $('#home div.banner:eq('+index+')').addClass('active').removeClass('unactive');
  //      $('#home div.banner:eq('+index+')').siblings('div.banner').removeClass('active').addClass('unactive');
  //      $('#home div.banner:eq('+index+')').siblings('div.banner').children().children('h1').removeClass('key');
  //      $('#home div.banner:eq('+index+')').children().children('h1').addClass('key');
  //      $('#home div.banner:eq('+index+')').siblings('div.banner').children().children('h3').removeClass('key1');
  //      $('#home div.banner:eq('+index+')').children().children('h3').addClass('key1');
  //      $('.num li:eq('+index+')').siblings().removeClass('bg-color');
  //      $('.num li:eq('+index+')').addClass('bg-color');
  //      index++;
  //    },6000);
  //  }
  //);
  $('.num').on('click','li',function(){
    var i = $(this).index()
    $('#home div.banner:eq('+i+')').addClass('active').removeClass('unactive');
    $('#home div.banner:eq('+i+')').siblings('div.banner').removeClass('active').addClass('unactive');
    $('#home div.banner:eq('+i+')').siblings('div.banner').children().children('h1').removeClass('key');
    $('#home div.banner:eq('+i+')').children().children('h1').addClass('key');
    $('#home div.banner:eq('+i+')').siblings('div.banner').children().children('h3').removeClass('key1');
    $('#home div.banner:eq('+i+')').children().children('h3').addClass('key1');
    $(this).siblings().removeClass('bg-color');
    $(this).addClass('bg-color');
  });
})
$('.aboutsTitle').on('click','a',function(e){
  e.preventDefault();
  var j = $(this).index();
  $('.aboutsMain div:eq('+j+')').css('display','block').siblings().css('display','none');
  $(this).css('background','rgba(0,187,225,1)').siblings().css('background',' rgba(0,187,225,.5)');
  $(this).children('b').css('display','block');
  $(this).siblings('a').children('b').css('display','none');
})

$('.Sale li').mouseover(function(){
  $(this).children('.hideTxt').addClass('scale');
});
$('.Sale li').mouseout(function(){
  $('.hideTxt').removeClass('scale');
});
//
//$('.clientsMain dl').on('mousemove','dt',function(e){
//  var target = e.target;
//  $(target).css('transform','rotatey(180deg)')
//})
$('.off').click(function(){
  $('.modeul').hide(1000);
});
$('.bg-blue').click(function(){
  $('.modeul').show(1000);
});