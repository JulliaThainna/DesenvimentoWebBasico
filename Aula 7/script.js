function getRadio() {
  let element = document.getElementsByName("gender"); //Pega todos os elementos com o name "gender" (retorna um array)

  for (let i = 0; i < element.length; i++) {
    //Por ex, se o array tem 5 de tamanho (tem 5 elementos no array), ele vai até i ser < o tamanho da array
    if (element[i].checked) {
      document.getElementById("radioResult").innerHTML =
        "Your gender is: " + element[i].value;
    }
  }
}

function getOp(){
  let selectElement = document.querySelector("#select1");
  let text = selectElement.value;
  document.querySelector(".plan").textContent = text;
}

function getCheckBox(){
  let checkBox = document.querySelectorAll("input[type=checkbox]:checked");
  let text = "";
  for (let i = 0; i < checkBox.length; i++) {
    text = text + ", " + checkBox[i].value;
  }
  document.getElementById("priorities").innerHTML = text;
}