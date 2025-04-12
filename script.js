const logo = document.getElementById("logo");
const button = document.getElementById("scrollButton");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Nombre de pixels scrolés
    const maxScroll = window.innerHeight; // Taille d'un écran

    // Diviser pour ralentir l'effet
    const scrollPercent = Math.min(scrollY / maxScroll, 1); // De 0 à 1

    // Grossir plus lentement et davantage (1 à 4x)
    const scale = 1 + scrollPercent * 3; // 1 à 4x de taille

    // Ralentir la disparition du logo
    const opacityLogo = 1 - Math.pow(scrollPercent, 2); // Soin d'étirer l'effet de disparition

    // Appliquer les transformations pour le logo
    logo.style.transform = `translate(-50%, -50%) scale(${scale})`;
    logo.style.opacity = opacityLogo;

    // Le bouton devient visible uniquement lorsque le logo est totalement invisible (opacité <= 0)
    if (opacityLogo <= 0) {
        button.style.opacity = 1; // Le bouton devient visible
    } else {
        button.style.opacity = 0; // Le bouton est caché
    }
});