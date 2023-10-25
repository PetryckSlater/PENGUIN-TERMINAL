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

// Json server

$(document).ready(function () {
    const baseUrl = 'http://localhost:4000'; // Certifique-se de que essa URL corresponda à sua configuração do JSON Server.

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
        const baseUrl2 = 'http://localhost:4000/users';

        // Verifica se o email já está em uso antes de adicionar o usuário.
        $.get(`${baseUrl2}?email=${email}`, function (data) {
            if (data.length > 0) {
                alert('Este email já está em uso. Por favor, escolha outro.');
            } else {
                // Enviar uma solicitação POST para registrar o usuário no JSON Server.
                $.ajax({
                    url: baseUrl2,
                    type: 'POST',
                    data: JSON.stringify({
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
            }
        });
    });

    $('#loginButton').click(function (e) {
        e.preventDefault();
        const email = $('#loginEmail').val();
        const password = $('#loginPassword').val();
        const baseUrl2 = 'http://localhost:4000/users';

        // Enviar uma solicitação GET para verificar o login no JSON Server.
        $.get(`${baseUrl2}?email=${email}&password=${password}`, function (data) {
            console.log(data);
            if (data.length > 0) {
                alert('Login bem-sucedido!');
                // Redirecionar o usuário para a página 'dashboard.html' após o login bem-sucedido.
                window.location.href = '/index.html';
            } else {
                alert('Login falhou. Verifique suas credenciais.');
            }
        });
    });
});
