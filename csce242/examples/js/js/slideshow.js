setInterval(() => {
    const currentSlide = document.querySelector("#slideshow :not(.hidden)");
    const nextSlide = currentSlide.nextElementSibling
        ? currentSlide.nextElementSibling
        : document.querySelector("#slideshow :first-child");

    currentSlide.classList.add("hidden");
    nextSlide.classList.remove("hidden");
}, 3500);
