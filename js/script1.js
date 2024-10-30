for(let i=0;i<16;i++){
  document.querySelector("#gioco ul").innerHTML+="<li></li>";
}

let random=parseInt(Math.random()*16);

let caselle=document.querySelectorAll("li");
let conteggio=0;

for(let i=0;i<caselle.length;i++){

  caselle[i].onclick=function(){
    
    let punteggio=this.classList.contains("arcobaleno");
    if(punteggio==false){
conteggio++;
    }

 if(i==random){
  this.classList.add("bomba");
  document.querySelector("#gioco span").classList.add("bloccaGioco");
  document.getElementById("fine").style.display="block";
  document.querySelector("#fine span").innerHTML=conteggio;
 }
 else{
  this.classList.add("arcobaleno");
 }
    
}
}

document.getElementById("new").onclick=function(){
  location.reload();
}