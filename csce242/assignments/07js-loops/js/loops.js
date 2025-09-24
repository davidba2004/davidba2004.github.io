document.getElementById("loops-btn").onclick = () => {
    const root = document.documentElement;
    const day = getComputedStyle(root).getPropertyValue("--day-sky-color");
    const night = getComputedStyle(root).getPropertyValue("--night-sky-color");

    const sky = document.body.style;
    const celestial = document.getElementById("celestial");
    const clouds = document.getElementById("clouds");
    const trees = document.getElementById("trees");

    const time = parseInt(new Date().toLocaleTimeString('en-US', {hour: '2-digit', hour12: false})); // military time hour consistent with browser

    // refresh
    sky.backgroundColor = '#fff';
    celestial.classList.remove("sun", "moon");
    clouds.innerHTML = '';
    trees.innerHTML = '';


    if (6 <= time && time <= 18) {
        sky.backgroundColor = day;
        celestial.classList.add("sun");
    } else {
        sky.backgroundColor = night;
        celestial.classList.add("moon");
    }

    const cul = document.createElement("ul");
    clouds.append(cul);
    const tul = document.createElement("ul");
    trees.append(tul);

    for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("li");
        cloud.classList.add("cloud");
        cul.appendChild(cloud);

        const tree = document.createElement("li");
        tree.classList.add("tree");
        tul.appendChild(tree);
    }
}