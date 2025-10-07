const getShoes = async () => {
  const url = "https://portiaportia.github.io/json/shoes.json";

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const showShoes = async () => {
  const shoes = await getShoes();

  shoes.forEach((shoe) => {
    const div = document.createElement("section");

    const name = document.createElement("h1");
    name.innerHTML = shoe.name;

    const brand = document.createElement("h2");
    brand.innerText = shoe.brand;

    const price = document.createElement("h3");
    price.innerHTML = `$${shoe.price}`;

    const material = document.createElement("h4");
    material.innerHTML = `${shoe.material}`;

    const description = document.createElement("p");
    description.innerHTML = shoe.description;

    const rating = document.createElement("h2");
    rating.innerHMTL = `${shoe.rating}/5`;

    const reviews = document.createElement("ul");
    shoe.reviews.forEach((review) => {
      const li = document.createElement("li");
      li.innerHTML = review;
      reviews.appendChild(li);
    });

    div.append(name, brand, material, price, description, reviews);
    div.style.margin = "auto 5%";
    div.style.maxWidth = "18%";

    const shoesSection = document.getElementById("shoes-section");
    shoesSection.style.display = "flex";
    shoesSection.flexWrap = "wrap";
    shoesSection.appendChild(div);
  });
};

showShoes();
