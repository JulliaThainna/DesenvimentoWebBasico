function getRadio(){
  let side;
  let sides = document.getElementsByName("formSides");
  for(let i = 0; i < sides.length; i++){
    if(sides[i].checked){
      side = sides[i].value;
    }
  }
  changeOnClickButton(side);
}

function changeOnClickButton(side){
  let activeImage =  document.querySelector("#carouselSW .carousel-item.active").querySelector("img");
  let color;

  if(side == null){
    return;
  }
  if(side == "neutral"){
    color = "purple";
    song = "ewok-side"
  }
  else if(side == "dark"){
    color = "red";
    song = "dark-side";
  }
  else{
    color = "blue";
    song = "light-side";
  }

  //Esconder e remover 
  document.querySelector(".carousel-control-prev").style.visibility = "hidden";
  document.querySelector(".carousel-control-next").style.visibility = "hidden";
  document.querySelector(".divFormSides").remove();
  document.getElementById("button-choose").remove();

  //Setar estilos
  activeImage.setAttribute("src",`img/cat-${side}.jpg`);
  console.log(activeImage);
  document.querySelector(".swCards").style.boxShadow = `0 1rem 3rem 0.2rem ${color}`;
  document.getElementById("msg-choose-side").style.color = `${color}`;
  document.getElementById("msg-choose-side").style.textShadow = `0 0 1.5rem ${color}`;
  document.getElementById("msg-choose-side").innerHTML = `YOU CHOOSE THE ${side.toUpperCase()} SIDE!`;
  document.getElementById("div-arrow").style.visibility = "visible";
  document.getElementById("song-theme").innerHTML = `<audio loop id="my-audio" onloadstart="setVolAudio()"><source src="audio/${song}.mp3" type="audio/mp3"></audio>`;
}

function setVolAudio(){
  let audio = document.getElementById("my-audio");
  if(audio){
    audio.play();
    audio.volume = 0.1;
  }
  else{
    alert("If you can read this it's probably because your browser doesn't support HTML media files.");
  }
}