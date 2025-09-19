// Nav
const planting = document.getElementById("planting");
const clock = document.getElementById("clock");
document.getElementById("exercise-plant").onclick = () => {
    planting.style.display = "block"
    clock.style.display = "none";
}

document.getElementById("exercise-clock").onclick = () => {
    clock.style.display = "block";
    planting.style.display = "none";
}

document.getElementById("show-nav").onclick = () => {
    const nav = document.getElementById("exercises");
    const display = nav.style.display;

    if (display === "none" || display ==="") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}

// Plant
const daysRange = document.getElementById("days-range");
daysRange.onchange = () => {
    const daysSinceWater = daysRange.value;
    const plantImg = document.getElementById("plant-img");
    const plantP = document.getElementById("plant-p");

    if (daysSinceWater >= 10) {
        plantImg.src = "./images/dead.png";
        plantP.innerHTML = "Sorry, your plant is no longer with us."
    } else if (daysSinceWater >= 6) {
        plantImg.src = "./images/dying.png";
        plantP.innerHTML = "Leaves are dropping, color is changing; water soon."
    } else if (daysSinceWater >= 3) {
        plantImg.src = "./images/thirsty.png";
        plantP.innerHTML = "Your plant needs watering."
    } else {
        plantImg.src = "./images/healthy.png";
        plantP.innerHTML = "Your plant is happy and healthy."
    }

    document.getElementById("num-days").innerHTML = daysSinceWater;
}

// Clock
const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric", // Displays the hour (e.g., 1, 12)
    minute: "2-digit", // Displays the minute with leading zero if needed (e.g., 05, 30)
    hour12: true, // Specifies 12-hour format with AM/PM
});

function updateClock() {
    const now = new Date();
    document.getElementById("time").innerHTML = formatter.format(now);
}

updateClock();
setInterval(updateClock, 6000);
