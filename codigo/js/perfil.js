function handleImageClick() {
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const bioSection = document.querySelector('.bio-section');
  const saveButton = document.querySelector('#save-button');

  // Torna os campos editáveis
  profileName.contentEditable = true;
  profileDescription.contentEditable = true;
  bioSection.querySelector('p').contentEditable = true;

  // Exibe o botão de salvar
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
  const pfp = localStorage.getItem('pfp');
  const bio = bioSection.querySelector('p').textContent;

  // Salva os dados no Local Storage
  const dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario')) || [];
  const logadoIndex = localStorage.getItem('Logado');
  const usuarioLogado = dadosUsuario[logadoIndex];
  usuarioLogado.userName = userName;
  usuarioLogado.pfp = pfp;
  usuarioLogado.bio = bio;
  dadosUsuario[logadoIndex] = usuarioLogado;
  localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));

  // Desativa a edição
  profileName.contentEditable = false;
  profileDescription.contentEditable = false;
  bioSection.querySelector('p').contentEditable = false;

  // Oculta o botão de salvar
  const saveButton = document.querySelector('#save-button');
  saveButton.style.display = 'none';
}

// Imagem clicável
const clickableImage = document.querySelector('.small-image');

// Evento de clique na imagem
clickableImage.addEventListener('click', handleImageClick);

// Botão de salvar
const saveButton = document.querySelector('#save-button');
saveButton.addEventListener('click', saveProfileData);