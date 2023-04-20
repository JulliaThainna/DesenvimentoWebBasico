//Como o carrossel funciona com teclas também, só o onclick bugava as cores shadow
function verifyKey(event){ 
  let keyCode = event.keyCode || event.which; //Obtém código da tecla pressionada
    if(keyCode == 37){ // <-
      changeShadow("P");
    }
    else if(keyCode == 39){ // ->
      changeShadow("N");
    }
}

function changeShadow(param) {
  let items = document.querySelectorAll("#carouselSW .carousel-item");   // Obter todos os itens do carrossel
  let activeIndex = Array.from(items).findIndex(item => item.classList.contains("active")); // Encontrar o índice do item ativo
  //console.log(activeIndex);
  
  let index;
  if(param == "N"){ //Next
    index = activeIndex + 1; // Encontrar o índice do próximo item
    if (index >= items.length) { // Se o próximo item não existir, definir o índice como 0
      index = 0;
    }
  } 
  else if(param == "P"){ //Prev
    index = activeIndex - 1; // Encontrar o índice do item anterior
    if (index < 0) {
      index = items.length - 1;
    }
  }

  activeImage = items[index].querySelector("img"); // Obter a imagem do item anterior
  //console.log(activeImage);

  // Definir a sombra com base na imagem selecionada
  if (activeImage.getAttribute("src").includes("cat-sith")) {
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem red";
  } else if (activeImage.getAttribute("src").includes("cat-jedi")) {
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem blue";
  } else {
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem yellow";
  }
}

// function changeShadowNext() {
//   // Obter o próximo item do carrossel
//   var nextItem = document.querySelector("#carouselSW .carousel-item.active + .carousel-item");
//   if (nextItem) {
//     activeImage = nextItem.querySelector("img");
//     console.log(activeImage);
//     if (activeImage.getAttribute("src").includes("cat-sith")) {
//       document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem red";
//     }
//     else if (activeImage.getAttribute("src").includes("cat-jedi")) {
//       document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem blue";
//     }
//   }
//   if(nextItem == null){
//     document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem yellow";
//   }
// }