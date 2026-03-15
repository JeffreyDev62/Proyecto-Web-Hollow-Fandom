const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulación de verificación de credenciales (reemplaza con tu lógica)
    if (username === 'Jeferson' && password === '123Arepa') {
        alert('Inicio de sesión exitoso');
        // Redirige a la página principal o realiza otras acciones
        window.location.href = './home.html'; // Reemplaza 'home.html' con la URL deseada
    } else {
        alert('Credenciales incorrectas');
    }
});