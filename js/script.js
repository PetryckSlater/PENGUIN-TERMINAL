const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let id = 1; // Você pode usar o ID apropriadamente.

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

$(document).ready(function () {
    const baseUrl = '/js/db.json'; // Certifique-se de que essa URL corresponda à sua configuração do JSON Server.

    // Função para alternar entre as telas de login e registro.
    function toggleLoginRegister() {
        $('#container').toggleClass('right-panel-active');
    }

    $('#login').click(function () {
        toggleLoginRegister();
    });

    $('#register').click(function () {
        toggleLoginRegister();
    });

    $('#registerButton').click(function (e) {
        e.preventDefault();
        const name = $('#signupName').val();
        const email = $('#signupEmail').val();
        const password = $('#signupPassword').val();

        // Envia uma solicitação POST para registrar o usuário no JSON Server.
        $.ajax({
            url: baseUrl,
            type: 'POST',
            data: JSON.stringify({
                id: id++,
                name: name,
                email: email,
                password: password
            }),
            contentType: 'application/json',
            success: function () {
                alert('Usuário registrado com sucesso.');
                toggleLoginRegister();
                $('#signupName').val('');
                $('#signupEmail').val('');
                $('#signupPassword').val('');
            },
            error: function () {
                alert('Erro ao registrar o usuário.');
            }
        });
    });

    $('#loginButton').click(function (e) {
        e.preventDefault();
        const email = $('#loginEmail').val();
        const password = $('#loginPassword').val();

        // Enviar uma solicitação GET para verificar o login no JSON Server.
        $.get(`${baseUrl}?email=${email}&password=${password}`, function (data) {
            console.log(data)
            if (data.length > 0) {
                console.log(data)
                alert('Login bem-sucedido!');
                console.log(data)
                // Redirecionar o usuário para a página 'dashboard.html' após o login bem-sucedido.
                window.location.href = '/index.html';
            } else {
                alert('Login falhou. Verifique suas credenciais.');
                console.log(data)
            }
        });
    });
});