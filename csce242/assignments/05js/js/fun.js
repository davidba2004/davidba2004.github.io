document.getElementById("sunny").onclick = () => {
    document.getElementById("lyrics").classList.toggle("hidden");
}

document.getElementById("color-picker").onchange = (event) => {
    document.getElementById("p-color").style.color = event.currentTarget.value;
}

document.getElementById("img-change").onclick = (event) => {
    const imgSrc = event.currentTarget.src;
    if (imgSrc.includes("sun.png")) {
        event.currentTarget.src = "./images/rain.png";
    } else {
        event.currentTarget.src = "./images/sun.png";
    }
}