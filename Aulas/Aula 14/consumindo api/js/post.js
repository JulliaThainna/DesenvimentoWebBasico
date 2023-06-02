function fazPost(url, body){
    let request = new XMLHttpRequest();
    request.open("POST", url, true); //true serve para falar se é síncrono ou assíncrono (nesse caso é síncrono)
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body)); //método da biblioteca JSON que transforma uma string em JSON
    request.onload = function(){
        console.log(this.responseText); //imprimir no console a resposta do send
    };
    return request.responseText;
    //Fazer mensagem de erro/sucesso pro POST
    //Ler sobre os status
}

function cadastrarUsuario(){
    let url = "http://localhost:3000/login";
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    body = {
        "email": email,
        "senha": senha,
    }
    fazPost(url, body);
}