$(document).ready(function(){
 var qA="";
 var qT="";
 var qV="";
 var qD="";
   
  getQuote();
  
  function getQuote(){
    var url="https://labs.bible.org/api/?passage=random&type=json&callback=?";
  $.getJSON(url, function(data){
    
     qA= data[0].bookname;
     qT= data[0].chapter;
     qV=data[0].verse;
     qD=data[0].text.split('<')[0];
    
 $(".quote").html(qD);
  $(".author").html(qA+ " " + qT + ":" + qV);
});
  }
  $(".btn").on("click",function(){
             getQuote();
             });
  
 
     $("#tweet").on("click",function(){
    var tAuthor=qA;
    var tQuote=qT;
    var tVerse=qV;
    var tData=qD;
  
       
       
    window.open("https://Twitter.com/intent/tweet?text="+tData+tAuthor +" "+ tQuote+":" +tVerse );

});
    $("#facebook").on("click",function(){
  
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent('https://codepen.io/Osmi2017/full/vmPEGd/')+'&t='+encodeURIComponent('MMAFIVESTARS - Nous n abandonnons jamais'),+'&i='+encodeURIComponent('https://z-p3-scontent.xx.fbcdn.net/v/t1.0-9/11800624_1064453250232737_8744863068673627844_n.png?_nc_eui2=v1%3AAeG3rLBv2tDEBahmhesGNfsO-zbfHWvAAvBpGOTPIf37hoDgsXqV-S6IWbwMzmgTGhEVmvk1pxHCAO_HEWCDBJFRrWvgtfI-czJaSwYuuqhM-Q&oh=0f03fddaa8ec82d1448ca91a1073d1da&oe=59BEC44F'))
   });
  });