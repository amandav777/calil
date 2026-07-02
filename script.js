document.addEventListener('DOMContentLoaded', () => {
    const seal = document.getElementById('seal');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const revealBtn = document.getElementById('reveal-btn');
    const drawingContainer = document.getElementById('drawing-container');
    const downloadBtn = document.getElementById('download-btn');

    const modal = document.getElementById('image-modal');
    const closeModal = document.getElementById('close-modal');
    const themeSong = document.getElementById('theme-song');
    const muteBtn = document.getElementById('mute-btn');

    let isMuted = false;

    // Abre o envelope ao clicar no selo
    seal.addEventListener('click', () => {
        envelopeWrapper.classList.add('open');
        
        // Toca a música e exibe botão de mute
        themeSong.volume = 0.5; // Um volume inicial agradável
        themeSong.play().then(() => {
            muteBtn.style.display = 'flex';
        }).catch(e => console.log('Autoplay preventido:', e));
        
        // Expande o envelope para centralizar o cartão mais rapidamente
        setTimeout(() => {
            envelopeWrapper.classList.add('expanded');
        }, 1500);
    });

    // Lógica do mute/unmute
    muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        themeSong.muted = isMuted;
        muteBtn.textContent = isMuted ? '🔇' : '🔊';
    });

    // Revela o modal em tela cheia com o desenho
    revealBtn.addEventListener('click', () => {
        modal.classList.add('show');
    });

    // Fecha o modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
