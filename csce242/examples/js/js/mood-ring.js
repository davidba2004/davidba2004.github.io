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