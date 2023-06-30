const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe15bd242fmsh9c76facee92b408p15175ajsna5ed02942d20",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};
function renderizarJogos(jogos) {
    const divJogos = document.getElementById("jogos");
    let quantidadeJogos = 10;
  
    divJogos.innerHTML = "";
  
    if (jogos.length < 10) {
      quantidadeJogos = jogos.length;
    }
  
    for (let i = 0; i < quantidadeJogos; i++) {
      const jogoAtual = jogos[i];
  
      divJogos.innerHTML += `
      <a class="jogoContainer" href="infoJogos.html?id=${jogoAtual.id}" target="_blank">
        <div class="jogo">
          <div>
          <img src="${jogoAtual.thumbnail}"/>
          </div>
          <div class="texto-jogo">
          <h1>${jogoAtual.title}</h1>
          <p>Gênero: ${jogoAtual.genre}</p>
          </div>
        </div>
      </a>
      `;
    }
}
fetch(url, options).then((resposta) => {
    resposta.json().then((jogos) => {
      const jogosAleatorios = [];
  
      for (let i = 0; i < 4; i++) {
        const indiceAleatorio = Math.floor(Math.random() * jogos.length);
        const jogoAleatorio = jogos[indiceAleatorio];
  
        jogosAleatorios.push(jogoAleatorio);
      }
  
      renderizarJogos(jogosAleatorios);
    });
});

function renederizarPessoas(pessoas){
  const divPessoas = document.getElementById("pessoas");
  let quantidadePessoas = 6;

  divPessoas.innerHTML = "";

  new URL(location.href).searchParams.get('profile-pfp');
  new URL(location.href).searchParams.get('profile-name');

  if(pessoas.length < 6){
    quantidadePessoas = pessoas.length;
  }

  for(let i = 0; i < quantidadePessoas; i++){
    const pessoaAtual = pessoas[i];

    divPessoas.innerHTML += `
    <div class="pessoa">
      <div>
        <img src="${pessoaAtual.pfp}"/>
      </div>
      <div class="texto-pessoa">
        <h1>${pessoaAtual.userName}</h1>
      </div>
    </div>
    `;
  }
}
function carregarUsuarios(){
  let bancoUsuarios = JSON.parse(localStorage.getItem('dadosUsuario'));
  let indice = JSON.parse(localStorage.getItem('Logado'));
  const perfil = document.getElementById("usuarios");
  console.log(bancoUsuarios);
  for(let i = 0; i < bancoUsuarios.length; i++){
    perfil.innerHTML += `<div class="pessoa" onclick="teste('${i}')">
    <a href="/codigo/html/janelaperfil.html" target="_blank">
      <img src="https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg" alt="Imagem 8">
    </a>
    <h2>${bancoUsuarios[i].userName}</h2>
  </div>`
  }
}
onload = () => {
  carregarUsuarios();
}
function pessoas(){
  window.location.href = "/codigo/html/jogadores.html";
}

function teste (id){
  sessionStorage.setItem("chave", id)
  window.location.href = "/codigo/html/janelaperfil.html";
}
