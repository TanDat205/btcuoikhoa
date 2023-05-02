const images = [
    { name: "image1", src: "item1.jpg" },
    { name: "image2", src: "item1.jpg" },
    { name: "image3", src: "item2.jpg" },
    { name: "image4", src: "item3.jpg" },
    { name: "image5", src: "item3.jpg" },
    { name: "image6", src: "item3.jpg" },
    { name: "image7", src: "item3.jpg" },
    { name: "image8", src: "item3.jpg" },
  ];

localStorage.setItem("images", JSON.stringify(images));
const storedImages = JSON.parse(localStorage.getItem("images"));
const imageContainer = document.getElementById("image-container");
for (let i = 0; i < storedImages.length; i++) {
    const image = document.createElement("img");
    image.src = storedImages[i].src;
    image.alt = storedImages[i].name;
    image.classList.add("image");
    imageContainer.appendChild(image);
}
