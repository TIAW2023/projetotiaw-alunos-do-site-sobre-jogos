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
      <div class="jogo">
        <div>
        <img src="${jogoAtual.thumbnail}"/>
        </div>
        <div class="texto-jogo">
        <h1>${jogoAtual.title}</h1>
        <p>Gênero: ${jogoAtual.genre}</p>
        <p>Descrição: ${jogoAtual.short_description}</p>
        <p>Data de Lançamento: ${new Date(
          jogoAtual.release_date.replace("-", "/")
        ).toLocaleDateString("pt-BR")}</p>
        </div>
      </div>  
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