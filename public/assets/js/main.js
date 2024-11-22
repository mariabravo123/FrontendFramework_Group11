// Selecionar o botão e o menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Adicionar um evento de clique ao botão
menuToggle.addEventListener('click', () => {
    // Alternar a classe 'show' no menu
    menu.classList.toggle('show');
});
