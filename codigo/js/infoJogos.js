const id = new URL(window.location.href).searchParams.get("id");
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fe15bd242fmsh9c76facee92b408p15175ajsna5ed02942d20",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

fetch(url, options).then((resposta) => {
  resposta.json().then((jogos) => {
    const [jogo] = jogos.filter((jogo) => jogo.id == id);
    const body = document.querySelector("body");

    body.innerHTML += `
      <div class="favoritar">
        <i class="fa-solid fa-heart" id="favoritar" onclick="clicado('${jogo.title}')"></i>
      </div>
      <div class="banner">
        <img src="${jogo.thumbnail}">
      </div>
      <h1>${jogo.title}</h1>
      <p id="desc">${jogo.short_description}</p>
      <p id="desc">Editora: ${jogo.publisher}</p>
      <p id="desc">Desenvolvedor: ${jogo.developer}</p>
      <p id="desc">Data de Lançamento: ${jogo.release_date}</p>
      <p id="desc">Plataforma: ${jogo.platform}</p>
    `;
  });
});
function clicado(titulo) {
  var indice = JSON.parse(localStorage.getItem('Logado'));
  var vetor = JSON.parse(localStorage.getItem('dadosUsuario'));
  document.getElementById("favoritar").style.color = "red";
  document.getElementById("favoritar").style.cursor = "default";
  vetor[indice].jogoFavoritos.push(titulo);
  localStorage.setItem('dadosUsuario', JSON.stringify(vetor));
  console.log(vetor[indice].jogoFavoritos);
  alert(titulo + " adicionado aos favoritos!");
}
