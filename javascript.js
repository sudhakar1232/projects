document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.classList.add("menu-toggle");
    document.querySelector(".header").appendChild(menuToggle);

    menuToggle.addEventListener("click", function () {
        document.querySelector(".menu-area ul").classList.toggle("active");
    });

    // Smooth Scroll
    document.querySelectorAll(".menu-area ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Lightbox Effect for Gallery
    const galleryImages = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.classList.add("active");
            const img = document.createElement("img");
            img.src = image.src;
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild);
            }
            lightbox.appendChild(img);
        });
    });

    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});
