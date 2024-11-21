var type = new Typed('#frase', {
    strings: ['Desde quando a gente se conheceu vc me mostrou que é uma amiga de vdd e vai ser uma coisa que eu vou lembrar pelo resto da minha vida e enquanto vc for a melhor pra mim eu tbm serei o melhor para vc, na vdd eu sou melhor do q vc, mas independente de td saiba que eu sou eternamente grato por ter vc na minha vida e espero que isso não acabe nunca!'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
})

const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: -carousel.offsetWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({
        left: carousel.offsetWidth,
        behavior: 'smooth'
    });
});

 // Obtenha o botão e o player de áudio
 const button = document.getElementById('playAudio');
 const audio = document.getElementById('audioPlayer');

 // Adicione um evento de clique ao botão
 button.addEventListener('click', () => {
     // Verifica se o áudio já está tocando
     if (audio.paused) {
         audio.play(); // Reproduz o áudio
         //button.textContent = 'Pausar Áudio';  Altera o texto do botão
     } else {
         audio.pause(); // Pausa o áudio
         //button.textContent = 'Tocar Áudio'; // Altera o texto do botão
     }
 });