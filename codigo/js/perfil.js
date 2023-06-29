function handleImageClick() {
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const bioSection = document.querySelector('.bio-section');
  const saveButton = document.querySelector('#save-button');

  //  faz ficar editávei
  profileName.contentEditable = true;
  profileDescription.contentEditable = true;
  bioSection.querySelector('p').contentEditable = true;

  // aparece o botão de salvar
  saveButton.style.display = 'block';

  // Foca no campo do nome
  profileName.focus();
}

function saveProfileData() {
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const bioSection = document.querySelector('.bio-section');

  // Obtém os valores dos campos
  const userName = profileName.textContent;
  const pfp = profileDescription.textContent;
  const bio = bioSection.querySelector('p').textContent;

  // Verifica se há dados de usuário no Local Storage
  let dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario'));
  if (!dadosUsuario) {
    dadosUsuario = [];
  }

  // Obtém o índice do usuário logado
  const idLogado = localStorage.getItem('Logado');

  // Atualiza os dados do usuário logado
  if (idLogado !== null && idLogado >= 0 && idLogado < dadosUsuario.length) {
    dadosUsuario[idLogado].userName = userName;
    dadosUsuario[idLogado].pfp = pfp;
    dadosUsuario[idLogado].bio = bio;

    // Salva os dados atualizados no Local Storage
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

    // Exibe uma mensagem de sucesso
    alert('Dados do perfil salvos com sucesso.');

    // Esconde o botão de salvar
    saveButton.style.display = 'none';
  } else {
    // Tratar o caso em que não há usuário logado ou o ID é inválido
    alert('Erro ao salvar os dados do perfil.');
  }
}

// Verifica se existem dados salvos no Local Storage
const savedUserData = localStorage.getItem('dadosUsuario');
if (savedUserData) {
  const dadosUsuario = JSON.parse(savedUserData);

  // Obtém o índice do usuário logado
  const idLogado = localStorage.getItem('Logado');

  // Preenche os campos com os dados do usuário logado
  if (idLogado !== null && idLogado >= 0 && idLogado < dadosUsuario.length) {
    const profileName = document.querySelector('.profile-name');
    const profileDescription = document.querySelector('.profile-description');
    const bioSection = document.querySelector('.bio-section');

    profileName.textContent = dadosUsuario[idLogado].userName;
    profileDescription.textContent = dadosUsuario[idLogado].pfp;
    bioSection.querySelector('p').textContent = dadosUsuario[idLogado].bio;
  }
}

// Imagem clicável
const clickableImage = document.querySelector('.small-image');

// Evento de clique na imagem
clickableImage.addEventListener('click', handleImageClick);

// Botão de salvar
const saveButton = document.querySelector('#save-button');
saveButton.addEventListener('click', saveProfileData);