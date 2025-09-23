document.getElementById("btn-display").onclick = () => {
    const display_div = document.getElementById("loop-result");
    const ul =  document.createElement("ul");
    display_div.append(ul);

    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.appendChild(li);
    }
}

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";

    const start = parseInt(document.getElementById("txt-start").value);
    const end = parseInt(document.getElementById("txt-end").value);

    if (start > end) {
        error.innerHTML = "The second number must be bigger than the first";
        return;
    }

    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";

    for (let i = start; i <= end; i++) {

    }
}