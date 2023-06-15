// configurações para uso do fetch
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
    <a class="jogoContainer" href="infoJogos.html?id=${jogoAtual.id}">
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
      let genero = "Shooter";
      let data = "recentes";
  

      const filtroJogos = document.getElementById("filtroJogos");
      const filtroData = document.getElementById("filtroData");
      const buscar = document.getElementById("buscar");
  

      filtroJogos.addEventListener("change", (e) => {
        genero = e.target.value;
      });
      filtroData.addEventListener("change", (e) => {
        data = e.target.value;
      });
  
      buscar.addEventListener("click", () => {

        const jogosFiltrados = jogos.filter((jogo) => {

          const respeitaFiltroJogo = jogo.genre == genero;
          let respeitaFiltroData;
  

          if (data === "recentes") {
           
            const anoJogo = new Date(
              jogo.release_date.replace("-", "/")
            ).getFullYear();
            const anoAtual = 2023;
            const jogoRecente = anoAtual - anoJogo <= 3;
  
            if (jogoRecente) {
              respeitaFiltroData = true;
            }

          } else if (data === "antigos") {
            
            const anoJogo = new Date(
              jogo.release_date.replace("-", "/")
            ).getFullYear();
            const anoAtual = 2023;
            const jogoAntigo = anoAtual - anoJogo > 3;
  
            if (jogoAntigo) {
              respeitaFiltroData = true;
            }
          }
  
          return respeitaFiltroJogo && respeitaFiltroData;
        });
  

        renderizarJogos(jogosFiltrados);
    });
    });
});