document.addEventListener("DOMContentLoaded", function() {
    const testForm = document.getElementById("test-form");

    testForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário real
        window.location.href = "https://vandilsonaguiar.github.io/dezKfree/baiting/baiting.html"; // Redireciona para a página sobre baiting
    });
});
