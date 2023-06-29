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

// Função para salvar as informações no localStorage da página de login
function saveInformation() {
  const profileName = document.querySelector('.profile-name');
  const profileDescription = document.querySelector('.profile-description');
  const bioSection = document.querySelector('.bio-section');
  const saveButton = document.querySelector('#save-button');

  // Salva as informações no localStorage da página de perfil
  localStorage.setItem('userName', profileName.textContent);
  localStorage.setItem('pfp', profileDescription.textContent);
  localStorage.setItem('bio', bioSection.querySelector('p').textContent);

  // Desativa a edição
  profileName.contentEditable = false;
  profileDescription.contentEditable = false;
  bioSection.querySelector('p').contentEditable = false;

  // Oculta o botão de salvar
  saveButton.style.display = 'none';
}

// Imagem clicável
const clickableImage = document.querySelector('.small-image');

// Evento de clique na imagem
clickableImage.addEventListener('click', handleImageClick);

// Verifica se existem valores salvos no localStorage da página de login
const savedName = localStorage.getItem('userName');
const savedPfp = localStorage.getItem('pfp');
const savedBio = localStorage.getItem('bio');

// Atualiza os elementos com os valores salvos
if (savedName) {
  const profileName = document.querySelector('.profile-name');
  profileName.textContent = savedName;
}

if (savedPfp) {
  const profileDescription = document.querySelector('.profile-description');
  profileDescription.textContent = savedPfp;
}

if (savedBio) {
  const bioSection = document.querySelector('.bio-section');
  bioSection.querySelector('p').textContent = savedBio;
}

// Adiciona um evento de clique ao botão de salvar
const saveButton = document.querySelector('#save-button');
saveButton.addEventListener('click', saveInformation);