// Efeito de Digitação (Typing Effect) para a tela de abertura
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.getElementById('typing-role');
    if (!typingElement) return;

    const originalText = typingElement.textContent;
    typingElement.textContent = ''; // Limpa o texto original para começar a digitação
    
    let charIndex = 0;
    const typingSpeed = 70; // Velocidade de digitação em milissegundos

    function type() {
        if (charIndex < originalText.length) {
            typingElement.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }

    // Inicia o efeito de digitação após um pequeno atraso
    setTimeout(type, 500);
});

// Adicionar mais interatividade aqui se necessário, como scroll reveal, etc.
