function calcularTabuada() {
  let number = document.getElementById("n").value;
  let div = document.getElementById("result");
  div.innerHTML = ""; //Garante que o conteúdo da let div seja limpo apenas uma vez, antes da primeira tabuada ser gerada, e não toda vez que a função é chamada
  for (let i = 1; i <= 10; i++) {
    let result = number * i;
    const node = document.createElement("p");
    const text = document.createTextNode(`${number} x ${i} = ${result}`);
    node.appendChild(text); //Adiciona o texto no p
    div.appendChild(node); //Adiciona a tag p que agora esta com o texto na div com id 'result'
  }
  return false; //Evita que o formulário seja enviado, o que faz a página ser atualizada e o conteúdo da div ser limpo novamente
}

let clique = 0;
function contador() {
  clique++;
  document.getElementById("click").innerHTML = clique;
}

function sorteador() {
  document.getElementById("aleatorio").innerHTML = parseInt(
    Math.random() * 10000
  );
}

function sorteadorIntervalo(min, max) {
  //console.log(typeof(min), typeof(max));
  min = parseInt(min);
  max = parseInt(max);
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("aleatorio2").innerHTML = random;
}
