let moves=0;
let dir="";
let leftCt=0;
let rightCt=0;
let repeat="";
let progess=[];
let correctSol=["r","l","r","l","l","r"];

function left(){
  dir="left";
  leftCt++;
  rightCt=0;
  progess.push("l");
}
function right(){
  dir="right"
  rightCt++;
  leftCt=0;
  progess.push("r");
}

function clicked(){
  moves++;
  if(progess.length<6){
    document.getElementById("gottenLost").style.display="none";
  }


  if(leftCt>1||rightCt>1){
    repeat="again";
  }
  else{
    repeat="";
  }

  if(moves==1){
    document.getElementById("mazeText").innerHTML="You go through the "+dir+" door and find... two more doors."
    document.getElementById("firstRoomReturn").style.display="none";
  }
  else if(moves==2){
    document.getElementById("mazeText").innerHTML="You go through the "+dir+" door and encounter... two more doors. Seems like you've entered some kind of maze."
  }
  else{
    document.getElementById("mazeText").innerHTML="You "+repeat+" go through the "+dir+" door"
  }
  if(progess.length==6){
    let pass=true;
    for(let i=0;i<progess.length;i++){
      if(progess[i]!=correctSol[i]){
        pass=false;
      }
    }
    if(pass){
      document.getElementById("mazeText").innerHTML="";
      document.getElementById("won").style.display="block";
      document.getElementById("maze").style.display="none";
    }
    else{
      document.getElementById("mazeText").innerHTML=""
      document.getElementById("gottenLost").style.display="block";
      document.getElementById("firstRoomReturn").style.display="block";
      progess=[];
      repeat=0;
      moves=0;
    }
  }
}