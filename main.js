const display = document.getElementById('display');

const delectFun = document.getElementById("Display2");

function Appendisplay(input){
  display.value += input;
}



function clearDispalay(value){
  display.value = "";

}


function calculator(){
  display.value = eval(display.value)
}





