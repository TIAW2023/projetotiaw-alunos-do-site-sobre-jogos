// mexe no clique na imagem
function handleImageClick() {
    const profileName = document.querySelector('.profile-name');
    const profileDescription = document.querySelector('.profile-description');
    const bioSection = document.querySelector('.bio-section');
    const saveButton = document.querySelector('#save-button');
  
    // faz as coisas serem editáveis
    profileName.contentEditable = true;
    profileDescription.contentEditable = true;
    bioSection.querySelector('p').contentEditable = true;
  
    // botão de salvar
    saveButton.style.display = 'block';
  
    // foco no nome
    profileName.focus();
  }
  
  // Função de salvar as informações no localStorage
  function saveInformation() {
    const profileName = document.querySelector('.profile-name');
    const profileDescription = document.querySelector('.profile-description');
    if(profileDescription.textContent.length > 109){
      profileDescription.textContent = "Valor ultrapassado, erro";
    }
    const bioSection = document.querySelector('.bio-section');
    const saveButton = document.querySelector('#save-button');
  
    localStorage.setItem('profileName', profileName.textContent);
    localStorage.setItem('profileDescription', profileDescription.textContent);
    localStorage.setItem('bio', bioSection.querySelector('p').textContent);
  
    // Desativa o editar e escondeeee o botão de salvar
    profileName.contentEditable = false;
    profileDescription.contentEditable = false;
    bioSection.querySelector('p').contentEditable = false;
    saveButton.style.display = 'none';
  }
  
  // imagem clicável
  const clickableImage = document.querySelector('.small-image');
  
  // evento de clique à imagem
  clickableImage.addEventListener('click', handleImageClick);
  
  // Verifica se existem valores salvos no localStorage
  const savedName = localStorage.getItem('profileName');
  const savedDescription = localStorage.getItem('profileDescription');
  const savedBio = localStorage.getItem('bio');
  
  // Atualiza os elementos com os valores salvos
  if (savedName) {
    const profileName = document.querySelector('.profile-name');
    profileName.textContent = savedName;
  }
  
  if (savedDescription) {
    const profileDescription = document.querySelector('.profile-description');
    profileDescription.textContent = savedDescription;
  }
  
  if (savedBio) {
    const bioSection = document.querySelector('.bio-section');
    bioSection.querySelector('p').textContent = savedBio;
  }
  
  // Adiciona um evento de clique ao botão de salvar
  const saveButton = document.querySelector('#save-button');
  saveButton.addEventListener('click', saveInformation);
  