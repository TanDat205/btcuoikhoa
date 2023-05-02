// Lấy danh sách các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Tạo một mảng để lưu trữ giỏ hàng
var cart = [];

// Lặp qua từng nút và thêm sự kiện click
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    // Lấy thông tin về sản phẩm được thêm vào giỏ hàng
    var product = {
      name: event.target.parentNode.querySelector('h2').textContent,
      price: event.target.parentNode.querySelector('p').textContent,
      quantity: 1
    };

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    var productInCart = cart.find(function(item) {
      return item.name === product.name;
    });

    // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
    // Nếu chưa tồn tại, thêm sản phẩm vào giỏ hàng
    if (productInCart) {
      productInCart.quantity++;
    } else {
      cart.push(product);
    }

    // Hiển thị giỏ hàng
    showCart();
  });
});

// Hàm hiển thị giỏ hàng
function showCart() {
  var cartList = document.getElementById('cart');

  // Xóa nội dung cũ của giỏ hàng
  cartList.innerHTML = '';

  // Lặp qua từng sản phẩm trong giỏ hàng và hiển thị thông tin
  cart.forEach(function(product) {
    var listItem = document.createElement('li');
    listItem.classList.add('cart-item');
    listItem.textContent = product.name + ' - ' + product.price + ' - ' + product.quantity;

    var removeButton = document.createElement('button');
    removeButton.classList.add('remove-item');
    removeButton.textContent = 'Xóa';
    removeButton.addEventListener('click', function() {
      // Xóa sản phẩm khỏi giỏ hàng
      cart.splice(cart.indexOf(product), 1);

      // Hiển thị giỏ hàng sau khi xóa sản phẩm
      showCart();
    });

    listItem.appendChild(removeButton);
    cartList.appendChild(listItem);
  });
}

