let cartItems = [];
let allProducts = [];

async function fetchProducts() {
  const api = await fetch("https://dummyjson.com/products");
  const response = await api.json();

  const productsContainer = document.querySelector(".product-container");
  response.products.forEach((product) => {
    const discountedPrice =
      product.price - (product.price * product.discountPercentage) / 100;
    productsContainer.innerHTML += `
    <div class="product-item">
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.title}">
      </div>
 
      <div class="product-description-container">
        <p class="product-id">${product.category}</p>
        <h1 class="product-name">${product.title}</h1>
        <p class="product-description">${product.description}</p>

      <div class="product-price">
        <h2 class="discount-price">$ ${discountedPrice.toFixed(2)}</h2>
        <p class="old-price">$ ${product.price.toFixed(2)}</p>
      </div>

      <button class="btn-cart" onclick="addToCart(${product.id}, '${product.title}', ${discountedPrice}, '${product.images[0]}')">
        <i class="fa-solid fa-cart-shopping"></i>
          Add to Cart
      </button>
      </div>
    </div>
    `;
  });

  allProducts = response.products;
  const categories = [
    ...new Set(response.products.map((product) => product.category)),
  ];
  const select = document.querySelector("#category-filter");
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    select.appendChild(option);
  });
}

function filterByCategory(category) {
  const filteredProducts = category
    ? allProducts.filter((product) => product.category === category)
    : allProducts;

  const filteredContainer = document.querySelector(".product-container");
  filteredContainer.innerHTML = filteredProducts
    .map((product) => {
      const discountedPrice =
        product.price - (product.price * product.discountPercentage) / 100;
      return `
<div class="product-item">
  <div class="product-image">
    <img src="${product.images[0]}" alt="${product.title}">
  </div>

  <div class="product-description-container">
    <p class="product-id">${product.category}</p>
    <h1 class="product-name">${product.title}</h1>
    <p class="product-description">${product.description}</p>

    <div class="product-price">
      <h2 class="discount-price">$ ${discountedPrice.toFixed(2)}</h2>
      <p class="old-price">$ ${product.price.toFixed(2)}</p>
    </div>

    <button class="btn-cart" onclick="addToCart(${product.id}, '${product.title}', ${discountedPrice}, '${product.images[0]}')">
      <i class="fa-solid fa-cart-shopping"></i> Add to Cart
    </button>
  </div>
</div>
`;
    })
    .join("");
}

const addToCart = (id, title, price, image) => {
  const item = {
    id,
    title,
    price,
    image,
    quantity: 1,
  };

  const ifProductExists = cartItems.find((cartItems) => cartItems.id === id);

  if (ifProductExists) {
    ifProductExists.quantity++;
  } else {
    cartItems.push(item);
  }

  updateCartDisplay();
  showNotification(`${title} foi adicionado ao carrinho`);
};

function updateCartDisplay() {
  const cartCount = document.querySelector("#cart-count");
  const cartContainer = document.querySelector(".cart-items");
  const cartTotalPrice = document.querySelector("#cart-total-price");

  if (cartCount) {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );
    cartCount.textContent = totalItems;
  }

  if (cartContainer) {
    cartContainer.innerHTML = cartItems
      .map(
        (item) => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.title}">
          <div class="cart-item-info">
            <h3>${item.title}</h3>
            <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
          </div>
          <button onclick="removeFromCart(${item.id})">Remover</button>
        </div>
      `,
      )
      .join("");
  }

  if (cartTotalPrice) {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    cartTotalPrice.textContent = `${total.toFixed(2)}`;
  }
}

const removeFromCart = (id) => {
  const index = cartItems.findIndex((item) => item.id === id);

  if (index > -1) {
    cartItems.splice(index, 1);
    updateCartDisplay();
    showNotification("Item removido do carrinho!");
  }
};

const checkout = () => {
  if (cartItems.length === 0) {
    showNotification("Seu carrinho está vázio");
    return;
  }

  showNotification("Compra realizada com sucesso!");
  updateCartDisplay();
  cartItems = [];
  toggleCart();
};

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 2000);
}

function toggleCart() {
  const cartModal = document.querySelector(".cart-modal");
  cartModal.style.display =
    cartModal.style.display === "block" ? "none" : "block";
  updateCartDisplay();
}

fetchProducts();
filterByCategory();
