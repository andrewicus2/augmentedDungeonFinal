let buttons = [false,false,false,false,false,false,false,false,false,false]
function loadCheck(){
  console.log(buttons)
}
function clicked(buttonId){
  buttons[buttonId]=!buttons[buttonId];
  console.log(buttons[buttonId])
  if(buttons[buttonId]){
    document.getElementById(buttonId).style.backgroundColor="#FFFFFF";
  }
  else{
    document.getElementById(buttonId).style.backgroundColor="#000000";
  }
  if(!buttons[0]&&buttons[1]&&buttons[2]&&!buttons[3]&&buttons[4]&&buttons[5]&&!buttons[6]&&!buttons[7]&&buttons[8]&&!buttons[9]){
    document.getElementById("successMsg").style.display="block";
    localStorage.setItem("powerOff",1);
  }
}