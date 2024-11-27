document.addEventListener("DOMContentLoaded", function () {
    // Suaviza a transição entre páginas
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita a navegação imediata
            const href = this.href; // Armazena o destino do link

            document.body.classList.add("fade-out"); // Adiciona a classe de fade-out
            setTimeout(() => {
                window.location.href = href; // Redireciona após a animação
            }, 500); // Duração da animação (0.5s)
        });
    });
});