/*
const sayHello = () => {
    console.log('Hello World!');
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

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
