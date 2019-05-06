var sec = 0;
var min = 0;
var time_str = "";
var distance = 0;


$(document).ready(function(){

    //Timer
    setInterval(function() {
      
      // Append 0 to single digit nums
      time_str = "Time Elapsed: " + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
      
      document.getElementById("timer").setAttribute('text', 'value', time_str);
      
      sec+=1
      
      if(sec==60){
        min+=1;
        sec=0;
      }
      
      
    }, 1000)// every 1000 ms
  
  
  
  //Distance
  setInterval(function() {
      

      // 4 ft/s in average

      distance +=20
      document.getElementById("distance").setAttribute('text', 'value', "Distance: "+ distance + "ft");
      
      
    }, 5000)// every 5000 ms
  
  

});