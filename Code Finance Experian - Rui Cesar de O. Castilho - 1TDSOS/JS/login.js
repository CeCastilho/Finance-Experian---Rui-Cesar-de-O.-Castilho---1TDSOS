// Seleciona os elementos do formulário, a área social, o link de "esqueci minha senha"
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('login-message');
const socialLogin = document.querySelector('.social-login'); // Seleciona a área social-login
const forgotPasswordLink = document.querySelector('.forgot-password'); // Seleciona o link de "esqueci minha senha"

// Função para mostrar a mensagem de login e esconder a área social-login e o link de "esqueci minha senha"
const showLoginMessage = () => {
    loginForm.style.display = 'none'; // Esconde o formulário de login
    socialLogin.style.display = 'none'; // Esconde a área social-login
    forgotPasswordLink.style.display = 'none'; // Esconde o link de "Esqueci minha senha"
    loginMessage.style.display = 'block'; // Exibe a mensagem de "Obrigado"
};

// Evento para o envio do formulário de login
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showLoginMessage();
});

// Adicionando eventos aos botões de login social
const socialLoginLinks = document.querySelectorAll('.social-login-link');
socialLoginLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita a navegação imediata
        showLoginMessage(); // Exibe a mensagem de agradecimento
    });
});
