const menuButton = document.getElementById('burger-menu');
const menuBar = document.getElementById('mobile-menu');

menuButton.addEventListener('click',()=>{
    menuBar.classList.toggle('hidden');
})