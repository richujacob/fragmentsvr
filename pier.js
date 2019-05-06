var counter  = 0;

function forwardArrow(){
  counter  = counter + 1;
  return counter;
}

function backwardArrow(){
  counter = counter - 1;
  return counter;
}

function showCounter(){
  return counter;
}