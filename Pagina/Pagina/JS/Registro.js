document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value; // Novo campo para nome
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/Registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, password })
    });

    const messageElement = document.getElementById('message');
    if (response.ok) {
        messageElement.textContent = 'Usuário registrado com sucesso!';
        setTimeout(() => {
            window.location.href = 'Login.html';
        }, 2000);
    } else {
        const errorMessage = await response.text();
        messageElement.textContent = errorMessage;
    }
});
