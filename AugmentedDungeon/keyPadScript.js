let clicks = 0;
let attempts = 0;
let sequence = 0;
let sC = localStorage.getItem("successCheck");

function loadCheck(){
  console.log(sC);
  if(sC!=0){
    document.getElementById("counter").innerHTML = "SUCCESS: CODE ACCEPTED";
    let revels = document.getElementsByClassName("afterPasswordSuccess");
    for(let i=0;i<revels.length;i++){
      revels[i].style.display="block";
    document.getElementById("keyboard").style.display="none"
    }

  }
}
function wrongPress()
{
  if(sC==0){
    clicks++;
    if(clicks==3){
      attempts++;
    }
    console.log(clicks)
    let message = ""
    document.getElementById("counter").innerHTML=message;
    if(attempts>0&&clicks>2){
      message = "ERROR: YOU HAVE ";
      message += 3-attempts;
      message += " ATTEMPTS LEFT";
      clicks=0;
      if(attempts>=3){
        document.getElementById("counter").innerHTML = "FAILURE: COMPUTER LOCKED";
      }
    }
    else{
      for(let i=0;i<clicks;i++){
      message +="X"
      }
    }
    document.getElementById("counter").innerHTML = message;
  }
}
function rightPress()
{
  if(sC==0){
    let message = "";
    document.getElementById("counter").innerHTML = message;
    message +="X"
    document.getElementById("counter").innerHTML = message;
    if(clicks==0&&attempts<3){
      sequence = 1;
      clicks++;
    }
    else{
      wrongPress();
    }
  }
}

function right2Press()
{
  document.getElementById("counter").innerHTML += "X";
  if(sequence==1&&clicks==1){
    sequence=2;
    clicks++;
  }
  else{
    wrongPress();
  }
}

function right3Press()
{
  if(sequence==2){
    sequence=3;
    document.getElementById("counter").innerHTML = "SUCCESS: CODE ACCEPTED";
    document.getElementById("keyboard").style.display="none"
    let revels = document.getElementsByClassName("afterPasswordSuccess");
    for(let i=0;i<revels.length;i++){
      revels[i].style.display="block";
    }
    localStorage.setItem("successCheck", 1);
  }
  else{
    wrongPress();
  }
}