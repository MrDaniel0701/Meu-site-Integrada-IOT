document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os links na página
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Verifica se o link é interno antes de aplicar a transição
            const href = this.getAttribute("href");
            if (href && !href.startsWith("http")) {
                event.preventDefault(); // Evita a navegação imediata
                const destination = this.href; // Armazena o destino do link
                document.body.classList.add("fade-out"); // Adiciona a classe de fade-out
                setTimeout(() => {
                    window.location.href = destination; // Redireciona após a animação
                }, 500); // Duração da animação (0.5s)
            }
        });
    });
 });

 // JavaScript para exibir o texto ao clicar no botão
document.getElementById("show-info-button").addEventListener("click", function () {
    const infoText = document.getElementById("site-info-text");
    if (infoText.style.display === "none") {
        infoText.style.display = "block"; // Mostra o texto
        this.textContent = "Ocultar informações"; // Altera o texto do botão
    } else {
        infoText.style.display = "none"; // Oculta o texto
        this.textContent = "Saiba mais sobre o site"; // Restaura o texto original do botão
    }
});