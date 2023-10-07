document.addEventListener("DOMContentLoaded", function() {
    const testForm = document.getElementById("test-form");

    testForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário real
        window.open("https://vandilsonaguiar.github.io/dezKfree/baiting/baiting.html", "_blank"); // Abre a página sobre baiting em uma nova aba/janela
    });
});
