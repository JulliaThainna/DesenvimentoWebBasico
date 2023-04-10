function getMaxMin() {
  let min = document.getElementById("min").value;
  min = parseInt(min);
  let max = document.getElementById("max").value;
  max = parseInt(max);

  //sintaxe de obj literal encurtado, ou seja, o nome das propriedades é o mesmo que o nome das variáveis
  //js automaticamente associa as propriedades do objeto com os valores das variáveis que possuem o mesmo nome.
  return { min, max };
  //return {min: min, max: max}; //Objeto declarado de forma implicita
}

function intervalDrawer() {
  //Sintaxe de desestruturação -> Obtem os valores das propriedades min e max do objeto retornado pela função
  //e atribui esses valores as variaveis locais min e max
  const { min, max } = getMaxMin();
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("random").innerHTML = random;
  return false;
}

function showRandomNumber() {
  //document.getElementById("randomNumber-text").style.visibility = "visible";
  document
    .getElementById("randomNumber-text")
    .setAttribute("style", "visibility: visible; padding");
  return false;
}

//Como só a mensagem de required não é o sufieciente, já que eu quero verificar se o número
//NÃO é negativo e se o mínimo é menor que o máximo
function validate(){
  const { min, max } = getMaxMin();
  if(min < 0){
    document.getElementById("min").setCustomValidity("Informe um valor positivo.");
  } else{
    document.getElementById("min").setCustomValidity("");
  }

  if(max < 0){
    document.getElementById("max").setCustomValidity("Informe um valor positivo.");
  } else{
    document.getElementById("max").setCustomValidity("");
  }

  if(min > max){
    document.getElementById("min").setCustomValidity("Informe um valor mínimo menor que o máximo.");
  } else{
    document.getElementById("max").setCustomValidity("");
  }
  return false;
}
