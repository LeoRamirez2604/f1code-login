document.addEventListener("DOMContentLoaded", () => {
    const loginModal = document.getElementById("loginModal");
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Mostrar el modal al cargar la página
    loginModal.classList.remove("hidden");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        // Resetear mensajes de error
        usernameError.style.display = "none";
        passwordError.style.display = "none";
        
        let isValid = true;

        // Valores de usuario y contraseña esperados
        const expectedUsername = "Leonardo";
        const expectedPassword = "Rayados1";

        // Validación del username
        if (usernameInput.value !== expectedUsername) {
            usernameError.textContent = "Incorrect username.";
            usernameError.style.display = "block";
            isValid = false;
        }

        // Validación de la contraseña
        if (passwordInput.value !== expectedPassword) {
            passwordError.textContent = "Incorrect password.";
            passwordError.style.display = "block";
            isValid = false;
        }

        // Si es válido, cerrar el modal
        if (isValid) {
            alert("Login successful!");
            loginModal.classList.add("hidden");
        }
    });
});
