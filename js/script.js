
let numRandom = Math.floor(Math.random() * 16);

document.getElementById("new").onclick=function(){
  location.reload();
}
let conteggio = 0;

for (let i = 0; i < 16; i++) {
  document.querySelector("#gioco ul").innerHTML += "<li></li>";
}

const quadrotti = document.querySelectorAll("#gioco li");


for (let i = 0; i < quadrotti.length; i++) {

  quadrotti[i].onclick = function () {
    //console.log(this);
    //if(this.style.backgroundImage=="")

    let controllo = this.classList.contains("arcobaleno");
    if (controllo == false) {
      conteggio++
    }

    if (i == numRandom) {
      // Hai trovato la bomba
      this.classList.add("bomba");
      //quadrotti[i].classList.add("bomba");
     
    fineGioco();
    
    }
    else {
      this.classList.add("arcobaleno");
    }
  }


  function fineGioco(){
    document.querySelector("#fine").style.display = "block";
    document.querySelector("#fine span").innerHTML = conteggio;
    document.querySelector("#gioco span").classList.add("bloccaGioco");
  }
}
