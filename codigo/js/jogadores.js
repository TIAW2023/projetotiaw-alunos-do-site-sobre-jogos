let bancoUsuarios = JSON.parse(localStorage.getItem("dadosUsuarios"));
function exibirUsuario() {
    var card = "";
    for (let i = 0; i < bancoUsuarios.length; i++) {
        const usuario = bancoUsuarios[i];

        card += `<div class="rectangle">
          <h1>${usuario.userName}</h1>

          <div class="content">
            <a href="/codigo/html/janelaperfil.html"> <img src="/codigo/img/download.jpg" alt="Imagem 8"></a>
            <p>${usuario.bio}</p>
          </div>
        </div>`
    }
    document.querySelector(`#java`).innerHTML = card;
}   

function mostrarUsuario(){
    var card = "";

    const id = document.querySelectorAll("java").forEach;
    
    button.addEventListener( function(event) {
    const el = event.target || event.srcElement;
    const id = el.id;
    console.log(id);
  });

    var usuario = bancoUsuarios[`java`];

    document.querySelector('#java').innerHTML = card;

}

const form = document.querySelector('#java');
form.addEventListener('submit', function(event){
event.preventDefault();
console.log('submetido');
});


onload = ()=> {
    exibirUsuario();
    mostrarUsuario();
}