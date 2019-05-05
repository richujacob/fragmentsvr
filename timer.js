setInterval(function() {
//if you are changing the text of input element
  document.getElementById("time").setAttribute("value", "THIS")
  
//if you are changing the text of a div of p element
  document.getElementById("time").innerText =  'innerHTML'
}, 2000)// every 2000 ms


