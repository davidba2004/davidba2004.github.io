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
        const p = document.createElement("p");
        p.innerHTML = i.toString();
        document.getElementById("d-count").append(p);
        p.onclick = () => {
            console.log(`You clicked number ${i}`)
        }
    }
}

document.getElementById("btn-toys").onclick = () => {
    const toys = document.getElementById("toys-list");
    toys.innerHTML = "";

    const ts = ["ball", "skipping rope", "doll", "mini car", "elmo"]

    ts.forEach((t, i) => {
        const li = document.createElement("li");
        li.innerHTML = `${i}. ${t}`;
        toys.appendChild(li);
    })

    /* OR
    for (const t of ts) {
        const li = document.createElement("li");
        li.innerHTML = t;
        toys.appendChild(li);
    }
     */

    /* OR
     for (int i = 0; i < ts.length; i++ {
        const li = document.createElement("li);
        li.innerHTML = ts[i];
        toys.appendChild(li);
     }
     */
}

document.getElementById("btn-toy-prices").onclick = () => {
    const toys = []
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["match box car"] = 2.54;

    const toyDiv = document.getElementById("toys-prices-top");
    const priceP = document.getElementById("toys-prices-bottom");

    for (let toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = `${toy}`;
        toyDiv.append(p);

        p.onclick = () => {
            priceP.innerHTML = `${toy} costs $${toys[toy]}`;
        }
    }
}