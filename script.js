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

function clearLast() {
  display.value = display.value.slice(0, -1);
}
