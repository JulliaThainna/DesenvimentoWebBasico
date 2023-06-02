function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function fazLinha(user){
    let linha = document.createElement("tr");
    let colId = document.createElement("td");
    let colEmail = document.createElement("td");
    let colSenha = document.createElement("td");
    colId.innerHTML = user.id_login_pk;
    colEmail.innerHTML = user.email;
    colSenha.innerHTML = user.senha;
    linha.appendChild(colId);
    linha.appendChild(colEmail);
    linha.appendChild(colSenha);
    return linha;
}

function main(){
    let dados = fazGet("http://localhost:3000/login");
    let tab = document.getElementById("tabela");
    let user = JSON.parse(dados);
    user.forEach(element => {
        let linha = fazLinha(element);
        tab.appendChild(linha);
    });
}

main();