  var selectedSide;

  function getRadio(){
    let sides = document.getElementsByName("formSides");
    for(let i = 0; i < sides.length; i++){
      if(sides[i].checked){
        selectedSide = sides[i].value;
      }
    }
    if(selectedSide == null){
      alert("Select a side.");
      return;
    }
    localStorage.setItem("side", selectedSide);
    changeOnClickButton();
  }

  function changeOnClickButton(){
    let activeImage = document.querySelector("#carouselSW .carousel-item.active").querySelector("img");
    let color;

    if(selectedSide == "neutral"){
      color = "purple";
    }
    else if(selectedSide == "dark"){
      color = "red";
    }
    else{
      color = "blue";
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
    document.getElementById("msg-choose-side").innerHTML = `You choose the ${selectedSide.toUpperCase()} side!`;
    document.querySelector(".div-arrow").style.visibility = "visible";
    setAudio();
  }

  function setAudio(){
    selectedSide = localStorage.getItem("side");
    if(selectedSide == null){
      return;
    }
    else if(selectedSide == "neutral"){
      song = "ewok-side"
    }
    else if(selectedSide == "dark"){
      song = "dark-side";
    }
    else{
      song = "light-side";
    }
    document.querySelector(".song-theme").innerHTML = `<audio loop id="my-audio"><source src="audio/${song}.mp3" type="audio/mp3"></audio>`;
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

    const arrayNeutral = ["CAPTURE A VALUABLE TREASURE ON AN ABANDONED PLANET",
    "EXPLORE ANCIENT RUINS IN SEARCH OF KNOWLEDGE OR TREASURE",
    "PROTECT A TRANSPORT SHIP WITH VALUABLE CARGO FROM RAIDERS",
    "INVESTIGATE A MYSTERY ON AN UNKNOWN PLANET",
    "PARTICIPATE IN SPEEDER RACES IN SEARCH OF PRIZES AND GLORY"];
    
    const arrayDark = ["ATTACK A REBEL BASE",
    "ASSASSINATE A LEADER OF THE REBEL ALLIANCE",
    "KIDNAP A JEDI FOR SITH TRAINING",
    "PLUNDER A MERCHANT VESSEL",
    "PROTECT A KYBER CRYSTAL MINE CONTROLLED BY THE EMPIRE"];
    
    const arrayLight = ["RESCUE PRISONERS FROM AN IMPERIAL PRISON",
    "ESCORT REBEL ALLIANCE DIPLOMATS ON A NEGOTIATING MISSION",
    "DEFEND A CITY FROM AN EMPIRE ATTACK",
    "INVESTIGATE SUSPICIOUS ACTIVITIES ON AN UNKNOWN PLANET",
    "ASSIST A LOCAL POPULATION ON A HUMANITARIAN MISSION"];

    if(selectedSide == null){
      return;
    }
    else if(selectedSide == "neutral"){
      for(let i = 0; i < 5; i++){
        const newLi = document.createElement("li");
        newLi.classList.add("list-group-item");
        newLi.innerHTML = `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="${arrayNeutral[i]}" id="mission${i}"><label class="form-check-label" for="mission1">${arrayNeutral[i]}</label></li>`
        checkbox.appendChild(newLi);
      }
    }
    else if(selectedSide == "dark"){
      for(let i = 0; i < 5; i++){
        const newLi = document.createElement("li");
        newLi.classList.add("list-group-item");
        newLi.innerHTML = `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="${arrayDark[i]}" id="mission${i}"><label class="form-check-label" for="mission1">${arrayDark[i]}</label></li>`
        checkbox.appendChild(newLi);
      }
    }
    else{
      for(let i = 0; i < 5; i++){
        const newLi = document.createElement("li");
        newLi.classList.add("list-group-item");
        newLi.innerHTML = `<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" value="${arrayLight[i]}" id="mission${i}"><label class="form-check-label" for="mission1">${arrayLight[i]}</label></li>`
        checkbox.appendChild(newLi);
      }
    }
  }

  function submitInfos(){
    let name = document.getElementById("input-name"); //get Name
    if(name.value == ""){    
      alert("Input a name.");
      return;
    }
    const numberMovie = document.getElementById("select-movie"); //get Movie
    const checkbox = document.querySelectorAll("input[type=checkbox]:checked") //get Checkbox list
    let missions = [""]; //get Missions
    for(let i = 0; i < checkbox.length; i++){
      missions[i] = checkbox[i].value;
    }
    if(checkbox.length == 0){
      alert("Select your mission(s).");
      return;
    }
    setAudio();
    showHistory(name, numberMovie, missions);
  } 

  function showHistory(name, numberMovie, missions){
    selectedSide = localStorage.getItem("side");
    let hist = document.getElementById("h3-history");
    let planet, year;
    if(selectedSide == null){
      return;
    }
    switch (parseInt(numberMovie.value)){
      case 1:
        planet = "Naboo";
        year = "32 BBY";
        break;
      case 2:
        planet = "Geonosis";
        year = "22 BBY";
        break;
      case 3:
        planet = "Coruscant";
        year = "19 BBY";
        break;
      case 4:
        planet = "Tatooine";
        year = "0 BBY/0 ABY";
        break;
      case 5:
        planet = "Hoth";
        year = "3 ABY";
        break;
      case 6:
        planet = "Endor";
        year = "4 ABY";
        break;
      case 7:
        planet = "Jakku";
        year = "34 ABY";
        break;
      case 8:
        planet = "Crait";
        year = "35 ABY";
        break;
      default:
        break;
    }

    if(selectedSide == "neutral"){
      hist.innerHTML = `You, ${name.value.toUpperCase()}, is an adventurer in the planet ${planet} in the year ${year}, you literally don't care about dark and light, imperial or rebels, you just want to enjoy the life. In this moment do you have this adventures to explore: ${missions}. Good luck!`;
    }
    else if(selectedSide == "dark"){
      hist.innerHTML = `You, ${name.value.toUpperCase()}, is a Imperial general in the year ${year}. Your Lord told to you complete this important missions in the planet ${planet}: ${missions}. Good luck! (You'll need.)`;
    }
    else{
      hist.innerHTML = `You, ${name.value.toUpperCase()}, is a light Jedi in the year ${year}. The Imperial plans an attack on the planet ${planet}, you need to do this missions to help the Rebel Alliance: ${missions}. Good luck, young Padawan!`;
    }
  }