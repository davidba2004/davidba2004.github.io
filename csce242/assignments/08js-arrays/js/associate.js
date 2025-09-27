const before = [];
before["Armando"] = "./images/armando-before.png";
before["Boxer"] = "./images/boxer-before.png";
before["CardiB"] = "./images/cardib-before.png";
before["Cindy"] = "./images/cindy-before.png";

const after = [];
after["Armando"] = "./images/armando-after.png";
after["Boxer"] = "./images/boxer-after.png";
after["CardiB"] = "./images/cardib-after.png";
after["Cindy"] = "./images/cindy-after.png";

// On page load
document.addEventListener("DOMContentLoaded", () => {
   for (let img in before) {
       // Make the dog section
       const dog = document.createElement("section");
       dog.className = "dog";

       const image = document.createElement("img");
       image.src = before[img];

       const adopt = document.createElement("div");
       adopt.className = "adopt-box";

       const p = document.createElement("p");
       p.innerHTML = `Please adopt ${img}`;

       adopt.append(p);

       dog.append(image);
       dog.append(adopt);

       document.getElementById("dogs").append(dog);

       // Associate the respective popup content
       dog.onclick = () => {
           // Make the header
           const popupHeader = document.createElement("div");
           popupHeader.id = "popup-header";

           const text = document.createElement("h3");
           text.innerHTML = `${img} after adoption`;

           const x = document.createElement("span");
           x.id = "close";
           x.innerHTML = "&#10006;"

           popupHeader.append(text);
           popupHeader.append(x);

           // Make the image
           const image = document.createElement("img");
           image.src = after[img];

           // Build the popup
           const popup = document.getElementById("popup");
           popup.innerHTML = "";
           popup.append(popupHeader);
           popup.append(image);

           popup.classList.remove("hidden");

           // Add closing functionality
           x.onclick = () => {
               popup.classList.add("hidden");
           }
       }
   }
});

