  var selectedSide;

  function getRadio(){
    let sides = document.getElementsByName("formSides");
    for(let i = 0; i < sides.length; i++){
      if(sides[i].checked){
        selectedSide = sides[i].value;
      }
    }
    localStorage.setItem("side", selectedSide);
    changeOnClickButton();
  }

  function changeOnClickButton(){
    let activeImage =  document.querySelector("#carouselSW .carousel-item.active").querySelector("img");
    let color;

    if(selectedSide == null){
      return;
    }
    else if(selectedSide == "neutral"){
      color = "purple";
      song = "ewok-side"
    }
    else if(selectedSide == "dark"){
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
    document.querySelector(".button-choose").remove();

    //Setar estilos
    activeImage.setAttribute("src",`img/cat-${selectedSide}.jpg`);
    document.querySelector(".swCards").style.boxShadow = `0 1rem 3rem 0.2rem ${color}`;
    document.getElementById("msg-choose-side").style.color = `${color}`;
    document.getElementById("msg-choose-side").style.textShadow = `0 0 1.5rem ${color}`;
    document.getElementById("msg-choose-side").innerHTML = `YOU CHOOSE THE ${selectedSide.toUpperCase()} SIDE!`;
    document.querySelector(".div-arrow").style.visibility = "visible";
    document.getElementById("song-theme").innerHTML = `<audio loop id="my-audio" onloadstart="setVolAudio()"><source src="audio/${song}.mp3" type="audio/mp3"></audio>`;
  }

  function setVolAudio(){
    console.log('aq')
    let audio = document.getElementById("my-audio");
    if(audio){
      audio.play();
      audio.volume = 0.1;
    }
    else{
      alert("If you can read this it's probably because your browser doesn't support HTML media files.");
    }
  }

  function showCard(){
    selectedSide = localStorage.getItem("side");
    document.getElementById("showCard").innerHTML = `<img src="img/cat-${selectedSide}.jpg" alt="cat-${selectedSide}" class="card-img"></img>`
    document.querySelector(".swCards").style.boxShadow = "0 1rem 3rem 0.2rem rgb(255, 193, 7)";
  }

  function appearCheckbox(){
    selectedSide = localStorage.getItem("side");
    const checkbox = document.getElementById("checkbox-mission");

    //TODO: Traduzir pra inglês
    const arrayNeutral = ["Capturar um tesouro valioso em um planeta abandonado",
      "Explorar ruínas antigas em busca de conhecimento ou tesouros",
      "Proteger uma nave de transporte com carga valiosa de<br> saqueadores",
      "Investigar um mistério em um planeta desconhecido",
      "Participar de corridas de speeder em busca de prêmios e glória"];  

    const arrayDark = ["Atacar uma base rebelde", 
    "Assassinar um líder da Aliança Rebelde", 
    "Raptar um Jedi para treinamento Sith", 
    "Saquear uma nave mercante", 
    "Proteger uma mina de cristais kyber controlada pelo Império"];

    const arrayLight = ["Resgatar prisioneiros de uma prisão Imperial",
      "Escoltar diplomatas da Aliança Rebelde em uma missão de <br>negociação",
      "Defender uma cidade de um ataque do Império",
      "Investigar atividades suspeitas em um planeta desconhecido",
      "Ajudar uma população local em uma missão de assistência <br>humanitária"];

    if(selectedSide == null){
      return;
    }
    else if(selectedSide == "neutral"){
      for(let i = 0; i < 5; i++){
        const newLi = document.createElement("li");
        newLi.classList.add("list-group-item");
        newLi.innerHTML = `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" id="mission${i}"><label class="form-check-label" for="mission1">${arrayNeutral[i]}</label></li>`
        checkbox.appendChild(newLi);
      }
    }
    else if(selectedSide == "dark"){
      for(let i = 0; i < 5; i++){
        const newLi = document.createElement("li");
        newLi.classList.add("list-group-item");
        newLi.innerHTML = `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" id="mission${i}"><label class="form-check-label" for="mission1">${arrayDark[i]}</label></li>`
        checkbox.appendChild(newLi);
      }
    }
    else{
      for(let i = 0; i < 5; i++){
        const newLi = document.createElement("li");
        newLi.classList.add("list-group-item");
        newLi.innerHTML = `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="" id="mission${i}"><label class="form-check-label" for="mission1">${arrayLight[i]}</label></li>`
        checkbox.appendChild(newLi);
      }
    }
  }

  function submitInfos(){
    const name = document.getElementById("input-name"); //getName
    const numberMovie = document.getElementById("select-movie"); //getMovie

    showHistory();
  }

  function showHistory(){
  }