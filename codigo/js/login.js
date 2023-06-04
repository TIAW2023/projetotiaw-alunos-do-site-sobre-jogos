function salvarDados(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confSenha = document.getElementById('confirmarSenha').value;
    var teste = JSON.parse(localStorage.getItem('dadosUsuario'));
    if(email === teste.email){
        alert("Já existe uma conta com este email.")
        return;
    }
    else if(senha !== confSenha){
        window.alert("As senhas precisam de ser idênticas.")
        return;
    }

    var dados = {
        email: email,
        senha: senha,
        userName: "",
        pfp: "",
        bio: "",
    }
    localStorage.setItem('dadosUsuario', JSON.stringify(dados));
    alert('Registro efetuado com sucesso.');
    window.location.href = "";

}
function entrarSite(){
    var emailEntrar = document.getElementById('emailLogin').value;
    var senhaEntrar = document.getElementById('senhaLogin').value;

    var dadosLogin = JSON.parse(localStorage.getItem('dadosUsuario'));
    if(emailEntrar === dadosLogin.email && senhaEntrar === dadosLogin.senha){
        alert("Login efetuado com sucesso");
        window.location.href = "";
    }
    else{
        alert("A senha inserida está incorreta.")
    }
    
}

