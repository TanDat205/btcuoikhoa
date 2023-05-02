let products = {
    data: [
        {
            name: "Thanh Mai (Lào Cai)",
            price: "120.000VNĐ",
            image: "item1.jpg"
        },

        {
            name: "Đào Bích Thị (Sa Pa)K",
            price: "120.000VNĐ",
            image: "item2.jpg"
        },

        {
            name: "Mận Đỏ (Sa Pa)",
            price: "120.000VNĐ",
            image: "item3.jpg"
        },        
    ]
}

let product = localStorage.getItem("product") ? JSON.parse(localStorage).getItem("product"):[]

for (let items of products){
    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
}
