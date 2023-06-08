function leDados () {
    let strDados = localStorage.getItem('db');
    letobjDados = {};

    if(strDados) {
        objDados = JSON.parse (strDados);
    }
    else{
        objDados = { login: [ 
         {email: "joãogamertopeira@gmail.com" , senha: "joaolutador123"},
         {email: "arthurzinmafioso@gmail.com" , senha: "Coxinha123"},
         {email: "mateuslalau007@gmail.com" , senha: "cruzeiro123"} ]
        }
    }
    return objDados;

}

function salvaDados (dados){
    localStorage.setItem ('db' ,JSON.stringify (dados));

}

function incluirContato () {
    let objDados = leDados();

    let email = document.getElementById('emailLogin').value;
    let senha = document.getElementById('senhaLogin').value;
    let novoContato = {
        xemail: email,
        xsenha: senha

    };
    objDados.login.push (novoContato);

    salvaDados (objDados);

    imprimeDados();
   
   

}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for(i = 0; i< objDados.login.length; i++){
        strHtml += '<p>${objDados.login[i].email - ${objDados.login[i].senha}</p>'
    }
    tela.innerHTML = strHtml;


}

//configura os botões
document.getElementById ('emailLogin').addEventListener('click' , imprimeDados)
document.getElementById ('senhaLogin').addEventListener('click' , imprimeDados)