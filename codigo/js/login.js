function salvarDados() {
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;
  var confSenha = document.getElementById('confirmarSenha').value;
  var dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
  if(!dadosUsuario){
    dadosUsuario = [];
  }
  if (dadosUsuario.length > 0) {
    for (let i = 0; i < dadosUsuario.length; i++) {

      var teste = dadosUsuario[i];

      if (email === teste.email) {
        alert("Já existe uma conta com este email.");
        return;
      }
    }
  }
  if (senha !== confSenha) {
    window.alert("As senhas precisam ser idênticas.");
    return;
  }
  else if(senha === ""){
    window.alert("Senha inválida inserida");
    return;
  }
  else if(email.indexOf("@") == -1){
    window.alert("Insira um email válido");
    return;
  }
  else{
    var dados = {
      email: email,
      senha: senha,
      userName: "",
      pfp: "",
      bio: "",
      jogoFavoritos: [],
      categoriasFavoritas: [],
    }
    dadosUsuario.push(dados);
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
    alert('Registro efetuado com sucesso.');
    window.open("../html/login.html");

  }
}

var contador = 0;
function entrarSite() {
  var emailEntrar = document.getElementById('emailLogin').value;
  var senhaEntrar = document.getElementById('senhaLogin').value;
  var dadosLogin = JSON.parse(localStorage.getItem('dadosUsuario'));
  for(let i = 0; i < dadosLogin.length; i++){
    if (emailEntrar === dadosLogin[i].email && senhaEntrar === dadosLogin[i].senha) {
      let id = i;
      localStorage.setItem('Logado', id);
      alert("Login efetuado com sucesso");
      window.open("../html/index.html");
      contador++;
    }
  }
  if(contador == 0){
    alert("Os dados inseridos estão incorretos ou o usuário não existe");
  }
  

}