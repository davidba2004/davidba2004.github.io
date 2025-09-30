class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");

        const arrow = document.createElement("span");
        arrow.innerHTML = "&#8593;"

        // header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);


        // Container
        const container = document.createElement("div");
        container.classList.add("columns");

        // Divs
        const div1 = document.createElement("div");
        const div2 = document.createElement("div");

        div1.append(this.picture(this.pic));
        div1.append(arrow);
        div2.append(this.paragraph("Breed: ", this.breed));
        div2.append(this.paragraph("Color: ", this.color));
        div2.append(this.paragraph("Age: ", this.age));
        div2.append(this.paragraph("Size: ", this.size));
        div2.classList.add("transparent");

        container.append(div1);
        container.append(div2);

        section.append(container);

        arrow.onclick = (e) => {
            e.preventDefault();
            div2.classList.toggle("transparent");
        }

        return section;
    }

    picture(filename) {
        const image = document.createElement("img");
        image.src = `images/classes/${filename}`;
        return image;
    }

    paragraph(key, value) {
        const p = document.createElement("p");
        console.log(key, value);
        p.innerHTML = `<strong>${key}</strong> ${value}`;
        console.log(p);
        return p;
    }
}

const dogs = [];
dogs.push(new Dog("Coco", "Yorkie", "Black", 6, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "large", "pitt-bull.jpg"));

const dogListDiv = document.getElementById("dog-list");

dogs.forEach((dog) => {
    dogListDiv.appendChild(dog.item);
})