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
  let color, img;

  if(side == null){
    return;
  }
  if(side == "neutral"){
    activeImage.setAttribute("src", "img/cat-bichinho.jpg"); 
    color = "purple";
  }
  else if(side == "dark"){
    activeImage.setAttribute("src", "img/cat-sith.webp"); 
    color = "red";
  }
  else{
    activeImage.setAttribute("src", "img/cat-jedi.webp"); 
    color = "blue";
  }
  
  //Esconder e remover 
  document.querySelector(".carousel-control-prev").style.visibility = "hidden";
  document.querySelector(".carousel-control-next").style.visibility = "hidden";
  document.querySelector(".divFormSides").remove();
  document.getElementById("button-choose").remove();

  //Setar estilos
  document.querySelector(".swCards").style.boxShadow = `0 1rem 3rem 0.2rem ${color}`;
  document.getElementById("msg-choose-side").style.color = `${color}`;
  document.getElementById("msg-choose-side").style.textShadow = ` 0 0 1.5rem ${color}`;
  document.getElementById("msg-choose-side").innerHTML = `YOU CHOOSE THE ${side.toUpperCase()} SIDE!`;
}