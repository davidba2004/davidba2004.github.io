// Happy
document.getElementById("happy-btn").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Yay!";
    event.currentTarget.classList.add("happy"); // current target is the button that was clicked
    document.getElementById('sad-btn').classList.remove("sad");
};

document.getElementById("sad-btn").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Nay!";
    event.currentTarget.classList.add("sad"); // current target is the button that was clicked
    document.getElementById("happy-btn").classList.remove("happy");
};

document.getElementById("clear-btn").onclick = () => {
    document.getElementById("p-welcome").innerHTML = "";
    document.getElementById('sad-btn').classList.remove("sad");
    document.getElementById("happy-btn").classList.remove("happy");
};

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = `You are feeling ${userInput}.`;
    document.getElementById('img-emotion').classList.remove("hidden");
}


// Mood Ring
document.getElementById("button-mood").onclick = () => {
    const input = document.getElementById("input-mood").value.trim().toLowerCase();
    const p = document.getElementById("p-mood");
    const error = document.getElementById("error-mood");
    p.innerHTML = "" // reset p
    error.innerHTML = ""; // reset error
    let mood = ""

    if (input === "") {
        error.innerHTML = "* blank";
        return;
    }

    if (input === "red") {
        mood = "mad";
    } else if (input === "blue") {
        mood = "sad";
    }

    if (mood === "") {
        error.innerHTML = "* Invalid color";
        return;
    }

    p.innerHTML = `You chose ${input} so you're feeling ${mood}.`
}


// Toggle Nav
document.getElementById("toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hide-small");
};


// Counter
let counter = 0;
let counterInterval;
const pCount = document.getElementById("p-count");
const btnStartCount = document.getElementById("btn-count-start");
const btnPauseCount = document.getElementById("btn-count-pause");
const btnResetCount = document.getElementById("btn-count-reset");

btnStartCount.onclick = () => {
    btnStartCount.disabled = true;
    btnPauseCount.disabled = false;
    btnResetCount.disabled = false;
    counterInterval = setInterval(() => {
        counter++;
        pCount.innerHTML = counter.toString();
    }, 1000);

}

btnPauseCount.onclick = () => {
    btnStartCount.disabled = false;
    btnPauseCount.disabled = true;
    btnResetCount.disabled = false;
    clearInterval(counterInterval);
}

btnResetCount.onclick = () => {
    btnStartCount.disabled = false;
    btnPauseCount.disabled = false;
    btnResetCount.disabled = true;
    counter = 0;
    pCount.innerHTML = "";
}


// Donations
const goal = 10000;
document.getElementById("goal-span").innerHTML = goal.toString();

let filled = 0;
document.getElementById("btn-donate").onclick = () => {
    const donation = document.getElementById("txt-donation").value;
    const error = document.getElementById("donation-error");
    const goalStatus = document.getElementById("goal-status");
    error.innerHTML = "";
    goalStatus.innerHTML = "";

    if(isNaN(donation) || donation <= 0) {
       error.innerHTML = "Invalid Amount";
       return;
    }
    const donationPercent = donation/goal * 100;



    if (donationPercent >= 100) {
        goalStatus.innerHTML = "Goal Reached";
    } else if (donationPercent >= 80) {
        goalStatus.innerHTML = "Almost there";
    } else if (donationPercent >= 50) {
        goalStatus.innerHTML = "Over halfway there";
    } else if (donationPercent >= 25) {
        goalStatus.innerHTML = "Keep going";
    } else {
        goalStatus.innerHTML = "Let's get started";
    }

    document.querySelector(":root").style.setProperty("--donation-percent", donationPercent + "%");
}