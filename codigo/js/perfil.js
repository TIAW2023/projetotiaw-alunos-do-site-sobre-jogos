document.addEventListener("DOMContentLoaded", function() {
  const profileName = document.querySelector(".profile-name");
  const profileDescription = document.querySelector(".profile-description");
  const profileBio = document.getElementById("profileBio");
  const saveButton = document.getElementById("save-button");

  // Obtém os dados do usuário do localStorage
  const dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

  // Verifica se os dados existem e preenche as informações do perfil
  if (dadosUsuario) {
    const usuarioLogadoId = localStorage.getItem("Logado");
    const usuarioLogado = dadosUsuario[usuarioLogadoId];

    profileName.textContent = usuarioLogado.userName;
    profileDescription.textContent = usuarioLogado.pfp;
    profileBio.textContent = usuarioLogado.bio;
  }

  // Torna os campos editáveis e exibe o botão de salvar
  function ativarEdicao() {
    profileName.contentEditable = true;
    profileDescription.contentEditable = true;
    profileBio.contentEditable = true;
    saveButton.style.display = "block";
    profileName.focus();
  }

  // Desativa a edição e oculta o botão de salvar
  function desativarEdicao() {
    profileName.contentEditable = false;
    profileDescription.contentEditable = false;
    profileBio.contentEditable = false;
    saveButton.style.display = "none";
  }

  // Salva os dados editados
  function salvarDados() {
    if (dadosUsuario) {
      const usuarioLogadoId = localStorage.getItem("Logado");
      const usuarioLogado = dadosUsuario[usuarioLogadoId];

      usuarioLogado.userName = profileName.textContent;
      usuarioLogado.pfp = profileDescription.textContent;
      usuarioLogado.bio = profileBio.textContent;

      localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
    }
  }

  // Adiciona o evento de clique na imagem
  const clickableImage = document.querySelector(".small-image");
  clickableImage.addEventListener("click", ativarEdicao);

  // Adiciona o evento de clique no botão de salvar
  saveButton.addEventListener("click", function() {
    salvarDados();
    desativarEdicao();
  });
});