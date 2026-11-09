const list = document.querySelector('#cart-list');

list.addEventListener("click", (event) => {
    console.log('fghfgf');
    
    if (event.target.closest("[data-id]")) {
        const products = JSON.parse(localStorage.getItem("cart"));
        const filteredProducts = products.filter(
            (product) => product.id !== Number(event.target.dataset.id)
        );
        localStorage.setItem("cart", JSON.stringify(filteredProducts));
        render();
    }
})

const createProductCard = (product) => {
  return `
        <li class="cart-item">
            <div class="cart-item__image">${product.image}</div>
            <div class="cart-item__info">
                <h3 class="cart-item__title">${product.title}</h3>
                <span class="cart-iten__price">${product.price}</span>
            </div>
            <div class="qty">
                <span class="qty__value">${product.qty}</span>
            </div>
            <button class="btn btn--icon" data-id="${product.id}">X</button>
        </li>
    `
}

const render = () => {
    const products = JSON.parse(localStorage.getItem("cart")) ?? [];

    const markup = products
        .map(createProductCard)
        .join("");
    list.innerHTML = markup
}

render()