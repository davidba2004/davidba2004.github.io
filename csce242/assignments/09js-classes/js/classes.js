class Painting {
    constructor(name, artist, image, frame) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.frame = frame;
    }

    get item() {
        const painting = document.createElement("div");
        painting.classList.add("painting");

        const name = this.title(this.name)
        const image = this.pic(this.image)

        painting.append(name.cloneNode(true));
        painting.append(image.cloneNode(true));

        painting.onclick = () => {
            const overlay = document.getElementById("overlay");
            overlay.innerHTML = '';

            const popup = document.createElement('div');
            popup.id = "popup";

            if (this.frame) {
                image.style.border = "10px solid black";
            }

            let x = document.createElement("span");
            x.id = "close";
            x.innerHTML = "X";
            popup.append(x);

            x.onclick = () => {
                overlay.innerHTML = '';
                overlay.classList.add("hidden");
            }

            const d1 = document.createElement("div");
            d1.append(name);
            d1.append(this.by(this.artist));
            d1.style.marginLeft = "10px";

            const d2 = document.createElement("div");
            d2.append(image);
            d2.style.textAlign = "center";
            d2.style.width = "95%";
            d2.style.margin = "auto 2.5%";

            image.style.width = "100%";

            popup.append(d1);
            popup.append(d2);

            overlay.append(popup);
            overlay.classList.remove("hidden");
        }

        return painting;
    }

    title(name) {
        const h4 = document.createElement("h4");
        h4.innerHTML = name;
        return h4;
    }

    pic(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        return img;
    }

    by(artist) {
        const by = document.createElement("p");
        by.innerHTML = `By: ${artist}`;
        return by;
    }
}

const container = document.getElementById('container');

const paintings = [];
paintings.push(new Painting("Spooky Ghost", "iPicture", "ghost.jpg", true));
paintings.push(new Painting("Haunted House", "BookLover45", "house.png", false));
paintings.push(new Painting("Wise Owl", "iPicture", "owl.jpg", true));
paintings.push(new Painting("Jack-O-Lantern", "iPicture", "pumpkin.jpg", false));
paintings.push(new Painting("Hamster on Pumpkin", "sabrinabelle", "hamster.jpg", true));

paintings.forEach((painting) => {
    container.append(painting.item)
})