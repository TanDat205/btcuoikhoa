const images = [
    { name: "image1", src: "item1.jpg" },
    { name: "image2", src: "item1.jpg" },
    { name: "image3", src: "item2.jpg" },
    { name: "image4", src: "item3.jpg" },
    { name: "image5", src: "item3.jpg" },
    { name: "image6", src: "item3.jpg" },
    { name: "image7", src: "item3.jpg" },
    { name: "image8", src: "item3.jpg" },
    { name: "image9", src: "img1.png" },
    { name: "image10", src: "img2.png" },
    { name: "image11", src: "img3.png" },
    { name: "image12", src: "img4.png" },
    { name: "image13", src: "img5.png" },
    { name: "image14", src: "img6.png" },
    { name: "image15", src: "img7.png" },
    { name: "image16", src: "img9.png" },
    { name: "image17", src: "img10.png" },
    { name: "image18", src: "img11.png" },
    { name: "image19", src: "img12.png" },
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
