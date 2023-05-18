function limpaForm(){
    document.getElementById("cep").value = ""
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("ibge").value = "";
}

function meucallback(content){
    if(!("erro" in content)){
        document.getElementById("rua").value = content.logradouro;
        document.getElementById("bairro").value = content.bairro;
        document.getElementById("cidade").value = content.localidade;
        document.getElementById("uf").value = content.uf;
        document.getElementById("ibge").value = content.ibge;
    }
    else{
        limpaForm();
        alert("Cep não existe!");
    }
}

function pesquisacep(value){
    let cep = value.replace(/\D/g, ""); //\D -> sem espaço, /g -> expressão global
    if(cep != ""){
        let validacep = /^[0-9]{8}$/; //^ A primeira coisa que precisa ser encontrada, com 8 digitos e quando termina precisa ter o mesmo padrão
        if(validacep.test(cep)){
            let script = document.createElement("script");
            script.src = "https://viacep.com.br/ws/"+ cep +"/json/?callback=meucallback";
            document.body.appendChild(script);
        }
        else{
            limpaForm();
            alert("Seu cep é inválido!");
        }
    }
    else{
        limpaForm();
        alert("Informe um cep!");
    }
}

