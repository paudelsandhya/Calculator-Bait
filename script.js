let display = document.getElementById("display");

function add(x){
  display.value += x;
}

function clr(){
  display.value = "";
}

function ans(){
  display.value = eval(display.value);
}