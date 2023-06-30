
function carregarUsuarios(){
  let bancoUsuarios = JSON.parse(localStorage.getItem('dadosUsuario'));
  let indice = JSON.parse(localStorage.getItem('Logado'));
  const perfil = document.getElementById("pessoas");
  console.log(bancoUsuarios);
  for(let i = 0; i < bancoUsuarios.length; i++){
    const usuario = bancoUsuarios[i];
    if(i === indice){
      perfil.innerHTML += `<div class="rectangle" id="java">
    <h1>${bancoUsuarios[i].userName}(Você)</h1>
    <div class="content">
      <img src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="Imagem 8">
      <p>${bancoUsuarios[i].bio}</p>
      <a href="/codigo/html/perfil.html"> <button class="button">Acessar perfil</button></a>
    </div>
  </div>`
    }
    else{
      perfil.innerHTML += `<div class="rectangle" id="java">
    <h1>${bancoUsuarios[i].userName}</h1>
    <div class="content">
      <img src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="Imagem 8">
      <p>${bancoUsuarios[i].bio}</p>
      <a href="/codigo/html/janelaperfil.html"> <button class="button">Saiba Mais</button></a>
    </div>
  </div>`
    }
  }
}
onload = () => {
  carregarUsuarios();
}
