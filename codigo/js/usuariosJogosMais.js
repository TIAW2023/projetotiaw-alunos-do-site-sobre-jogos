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

  // limpa div de jogos
  divJogos.innerHTML = "";

  /* se a quantidade de jogos filtrados for menor que o limite definido para ser renderizado,
     exiba a quantidade de itens do array de jogos filtrados.
  */
  if (jogos.length < 10) {
    quantidadeJogos = jogos.length;
  }

  // passa por cada jogo, renderizando na tela
  for (let i = 0; i < quantidadeJogos; i++) {
    const jogoAtual = jogos[i];

    divJogos.innerHTML += `
      <h1>${jogoAtual.title}</h1>
      <img src="${jogoAtual.thumbnail}"/>
      <p>${jogoAtual.genre}</p>
      <p>Descrição: ${jogoAtual.short_description}</p>
      <p>Data de Lançamento: ${new Date(
        jogoAtual.release_date.replace("-", "/")
      ).toLocaleDateString("pt-BR")}</p>
    `;
  }
}
fetch(url, options).then((resposta) => {
    resposta.json().then((jogos) => {
      // valores que serão substituídos quando os selects de filtros forem alterados.
      let genero = "Shooter";
      let data = "recentes";
  
      // elementos do html
      const filtroJogos = document.getElementById("filtroJogos");
      const filtroData = document.getElementById("filtroData");
      const buscar = document.getElementById("buscar");
  
      // atribui o valor selecionado para as variaveis "genero" e "data" declaradas acima.
      filtroJogos.addEventListener("change", (e) => {
        genero = e.target.value;
      });
      filtroData.addEventListener("change", (e) => {
        data = e.target.value;
      });
  
      // evento de click do botão de busca
      buscar.addEventListener("click", () => {
        /* a variável abaixo armazena um array de jogos que respeitam a condição de genero
           e data */
        const jogosFiltrados = jogos.filter((jogo) => {
          // condições para filtrar
          const respeitaFiltroJogo = jogo.genre == genero;
          let respeitaFiltroData;
  
          // se o filtro selecionado for dos jogos mais recentes
          if (data === "recentes") {
            // pega ano de lançamento do jogo, ano atual e verifica a diferença entre os dois
            const anoJogo = new Date(
              jogo.release_date.replace("-", "/")
            ).getFullYear();
            const anoAtual = 2023;
            const jogoRecente = anoAtual - anoJogo <= 3;
  
            if (jogoRecente) {
              respeitaFiltroData = true;
            }
  
            // se o filtro selecionado for dos jogos mais antigos
          } else if (data === "antigos") {
            // pega ano de lançamento do jogo, ano atual e verifica a diferença entre os dois
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
  
        // renderiza os jogos filtrados
        renderizarJogos(jogosFiltrados);
    });
    });
});