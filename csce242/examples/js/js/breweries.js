const getBreweries = async () => {
    const url = "https://api.openbrewerydb.org/v1/breweries";
    try {
        const breweries = await fetch(url);
        return breweries.json();
    } catch (error) {
        console.error(error);
    }
};

const showBreweries = async () => {
    const breweries = await getBreweries();
    const breweriesSection = document.getElementById("breweries");

    breweries.forEach((brew) => {
        const section = document.createElement("section");
        section.classList.add("brewery");
        breweriesSection.append(section);

        // title link
        const h3 = document.createElement("h3");
        section.append(h3);
        const a = document.createElement("a");
        h3.append(a);
        a.innerHTML = brew.name;
        a.href = brew.website_url;

        // p for brewery type
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = brew.brewery_type;
    })

    return breweriesSection;
}

showBreweries();