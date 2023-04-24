function listenerClick(){
  document.addEventListener("click", function(event) {
    if (!event.target.closest("#carouselSW, #sideNeutral, #sideSith, #sideJedi")) {     // Verificar se o elemento clicado não é o carrossel ou um formulário
      //ideia futura,quando o usuario clica fora do carrosel/forms, as setas voltam e o carrossel voltar o slide normal
      document.querySelector(".carousel-control-prev").style.visibility = "visible";
      document.querySelector(".carousel-control-next").style.visibility = "visible";
    } 
  });
}
listenerClick(); 

//Como o carrossel funciona com teclas também, só o onclick bugava as cores shadow
function verifyKey(event){ 
  const keyCode = event.keyCode || event.which; //Obtém código da tecla pressionada
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

  // Definir a sombra com base na imagem selecionada
  if (activeImage.getAttribute("src").includes("cat-sith")) {
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem red";
  } else if (activeImage.getAttribute("src").includes("cat-jedi")) {
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem blue";
  } else {
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem yellow";
  }
}

function changeCard(event){
  let activeImage =  document.querySelector("#carouselSW .carousel-item.active").querySelector("img");

  if(event.target.id == "sideNeutral"){
    activeImage.setAttribute("src", "img/cat-bichinho.jpg"); 
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem yellow";
  }
  else if(event.target.id == "sideSith"){
    activeImage.setAttribute("src", "img/cat-sith.webp"); 
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem red";
  }
  else if(event.target.id == "sideJedi"){
    activeImage.setAttribute("src", "img/cat-jedi.webp"); 
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem blue";
  }
  document.querySelector(".carousel-control-prev").style.visibility = "hidden";
  document.querySelector(".carousel-control-next").style.visibility = "hidden";
}

/*
function changeShadowNext() {
  // Obter o próximo item do carrossel
  var nextItem = document.querySelector("#carouselSW .carousel-item.active + .carousel-item");
  if (nextItem) {
    activeImage = nextItem.querySelector("img");
    console.log(activeImage);
    if (activeImage.getAttribute("src").includes("cat-sith")) {
      document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem red";
    }
    else if (activeImage.getAttribute("src").includes("cat-jedi")) {
      document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem blue";
    }
  }
  if(nextItem == null){
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem yellow";
  }
}
*/

//------------------------------------------------------------------------------------ OUTRA FORMA DA FUNÇÃO
/*
function changeShadow(){
  //Obter referência para o carrossel
  var carousel = document.querySelector('#carouselSW');

  //Adicionar listener para o evento slide.bs.carousel
  carousel.addEventListener('slide.bs.carousel', function (event) {
  // Obter o slide que está sendo mostrado
  var activeSlide = event.relatedTarget;

  // Obter a imagem do slide que está sendo mostrado
  var activeImage = activeSlide.querySelector('img');

  // Atualizar a sombra do cartão correspondente
  if (activeImage.getAttribute('src').includes('cat-sith')) {
    document.querySelector('.swCards').style.boxShadow = '0 1rem 3rem 0.2rem red';
  } else if (activeImage.getAttribute('src').includes('cat-jedi')) {
    document.querySelector('.swCards').style.boxShadow = '0 1rem 3rem 0.2rem blue';
  } else {
    document.querySelector('.swCards').style.boxShadow = '0 1rem 3rem 0.2rem yellow';
  }
  });

  // Adicionar listener para o evento click nos botões de navegação
  document.querySelector('.carousel-control-prev').addEventListener('click', function () {
    // Navegar para o slide anterior
    carousel.carousel('prev');
});

document.querySelector('.carousel-control-next').addEventListener('click', function () {
  // Navegar para o próximo slide
  carousel.carousel('next');
});
}
*/
