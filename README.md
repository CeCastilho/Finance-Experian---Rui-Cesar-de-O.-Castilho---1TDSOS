# Finance-Experian---Rui-Cesar-de-O.-Castilho---1TDSOS
Finance Experian
Finance Experian é uma plataforma de gerenciamento de finanças pessoais que permite aos usuários acompanhar suas finanças em um só lugar. Através de um design responsivo e interface simples, o sistema oferece aos usuários uma experiência única para gerenciar suas finanças, sem taxas de manutenção e com recursos de assessoria digital.

Funcionalidades
Cadastro de Usuário: Permite que novos usuários criem uma conta para acessar o sistema.
Login de Usuário: Usuários podem se autenticar e acessar suas finanças.
Vantagens: A página oferece vantagens de uso da plataforma.
Interface Responsiva: Design otimizado para diferentes tamanhos de tela (desktop e mobile).
Tela 01: Página Inicial
A tela inicial apresenta a logo e uma mensagem de boas-vindas, além de permitir que o usuário entre no sistema ou crie uma nova conta. O design é simples e acessível, com botões para as ações principais.

Estrutura:
Logo centralizada.
Botões para "Entrar" ou "Abrir conta".
Termos de uso e aviso de privacidade ao final.
Exemplo de Código (HTML):

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finance Experian</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="/CSS/style.css">
    <link rel="icon" href="/IMG/Logo Icon Seta.png">
</head>
<body>
    <div class="container d-flex flex-column justify-content-center align-items-center vh-100">
        <img src="/IMG/Finance experian.png" alt="Logo Finance Experian" class="logo mb-4">
        <h1>Suas Finanças em um só lugar</h1>
        <p>Finance Experian, sinta uma verdadeira experiência financeira.</p>
        <div class="buttons">
            <a href="/HTML/login.html"><button class="btn btn-primary">Entrar</button></a>
            <a href="/HTML/abrir_conta.html"><button class="btn btn-outline-secondary">Abrir conta</button></a>
        </div>
    </div>
    <footer class="bg-secondary text-light text-center py-3">
        <p>&copy; 2024 Finance Experian. Todos os direitos reservados. São Paulo - SP</p>
    </footer>
</body>
</html>

Tela 02: Vantagens
A segunda tela apresenta as vantagens de usar o Finance Experian, com botões para destacar as principais funcionalidades da plataforma, como assessoria digital e controle de finanças. O usuário pode ser levado para a página de cadastro diretamente.

Exemplo de Código (HTML):

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finance Experian - Vantagens</title>
    <link rel="stylesheet" href="/CSS/abrir_conta.css">
</head>
<body>
    <div class="container d-flex flex-column justify-content-center align-items-center vh-100">
        <img src="/IMG/Finance experian.png" alt="Logo Finance Experian" class="logo mb-4">
        <a href="/HTML/index.html" class="back-button">← Voltar</a>
        <h1>Comece sua jornada através de uma nova experiência</h1>
        <p>Conheça nossas vantagens e faça já o seu cadastro. Leva só 9 minutos!</p>
        <div class="buttons">
            <button class="button">Assessoria digital</button>
            <button class="button">Sem taxa de manutenção</button>
            <button class="button">Controle de finanças</button>
            <button class="button">Atendimento Premium</button>
        </div>
        <a href="/HTML/cadastro.html" class="call-to-action">Vamos lá!</a>
    </div>
</body>
</html>

Tela 03: Cadastro de Cliente
Na tela de cadastro, os usuários fornecem seus dados (nome, e-mail e senha). Após o cadastro, o usuário é redirecionado para a página de login.

Função de Redirecionamento:
O cadastro redireciona automaticamente para a página de login após o envio do formulário.

Exemplo de Código (HTML):

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finance Experian - Cadastro</title>
    <script>
        // Função para redirecionar para a página de login após o cadastro
        function redirectToLogin(event) {
            event.preventDefault(); // Previne o comportamento padrão de envio do formulário
            window.location.href = '/HTML/login.html'; // Redireciona para a página de login
        }
    </script>
</head>
<body>
    <div class="container">
        <div class="cadastro-form">
            <h1>Cadastro de Clientes</h1>
            <form onsubmit="redirectToLogin(event)">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required>
                <button type="submit" class="btn btn-primary">Cadastrar</button>
                <a href="/HTML/index.html"><button type="button" class="btn btn-secondary">Cancelar</button></a>
            </form>
        </div>
    </div>
</body>
</html>

Tela 04: Login
A tela de login permite que o usuário insira seu e-mail e senha para acessar sua conta. A página também oferece opções de login social (Google, Facebook) e um link para recuperação de senha.

Exemplo de Código (HTML):

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finance Experian - Login</title>
</head>
<body>
    <div class="container">
        <a href="index.html" class="back-button">← Voltar</a>
        <img src="/IMG/Finance experian.png" alt="Logo Finance Experian" class="logo">
        <div id="login-form-container">
            <form id="loginForm">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email" name="email" required>
                <label for="password">Senha:</label>
                <input type="password" class="form-control" id="password" name="password" required>
                <button type="submit" class="btn btn-primary">LOGIN</button>
            </form>
        </div>
        <div class="social-login">
            <a href="javascript:void(0);" class="social-login-link">
                <img src="/IMG/Google.svg" alt="Google">
            </a>
            <a href="javascript:void(0);" class="social-login-link">
                <img src="/IMG/Facebook.svg" alt="Facebook">
            </a>
        </div>
        <a href="esqueci_senha.html" class="forgot-password">Esqueci minha senha</a>
    </div>
</body>
</html>

Como Rodar o Projeto
Requisitos
Um servidor web local (como o XAMPP, WAMP, VS Code Live Server, etc).
Passos para Execução
1. Clone o repositório:

git clone https://github.com/seuusuario/finance-experian.git

2. Abra o diretório do projeto no seu editor de código (ex: VS Code).
3. Execute o projeto localmente no seu servidor web.
4. Acesse o site através do seu navegador.
