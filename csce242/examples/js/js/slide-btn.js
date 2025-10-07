document.getElementById("arrow-prev").onclick = (event) => {
    event.preventDefault();

    const currentSlide = document.querySelector("#slides img:not(.hidden)");
    const prevSlide = currentSlide.previousElementSibling ? currentSlide.previousElementSibling : document.querySelector("#slides img:first-child");

    prevSlide.classList.remove("hidden");
    currentSlide.classList.add("hidden");
}

document.getElementById("arrow-next").onclick = (event) => {
    event.preventDefault();

    const currentSlide = document.querySelector("#slides img:not(.hidden)");
    const nextSlide = currentSlide.nextElementSibling ? currentSlide.nextElementSibling : document.querySelector("#slides img:last-child");

    nextSlide.classList.remove("hidden");
    currentSlide.classList.add("hidden");
}