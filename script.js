document.addEventListener("DOMContentLoaded", function() {
    const testForm = document.getElementById("test-form");

    testForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário real
        window.location.href = "baiting.html"; // Redireciona para a página sobre baiting
    });
});
