function salvar(){
    let tableUser = document.querySelector('table');
    let row = tableUser.insertRow();
    //Automatizar com for
    let cel0 = row.insertCell(0);
    let cel1 = row.insertCell(1);
    let cel2 = row.insertCell(2);
    let cel3 = row.insertCell(3);
    cel0.innerHTML = document.getElementById('nome').value;
    cel1.innerHTML = document.getElementById('email').value;
    cel2.innerHTML = document.getElementById('nascimento').value;
    cel3.innerHTML = document.getElementById('estado').value;
}

//Fazer a limpeza do formulario ao salvar
//Desmembrar a tabela do formulário -> tela de cadastro -> Ir pra tabela em outra pagina