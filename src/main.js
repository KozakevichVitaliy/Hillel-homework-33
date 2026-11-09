const productsGrid = document.querySelector('#products');

productsGrid.addEventListener("click", (event) => {
  if (event.target.closest("[data-id]")) {
    console.log('fdfds');
    
  }
})

const createProductCard = (product) => {
  return `
    <article class="card">
      <div class="card__image">${product.image}</div>
      <div class="card__body">
        <span class="card__category">${product.category}</span>
        <h3 class="card__title">${product.title}</h3>
        <p class="card__desc">${product.description}</p>
        <div class="card__footer">
          <div>
            <div class="card__price">${product.price}</div>
            <div class="card__rating">${product.rating.toFixed(1)}</div>
            <button class="btn btn--primary" data-id="${product.id}">У кошик</button>
          </div>
        </div>
      </div>
    </article>
  `
}

const createSkeleton = () => {
  const markup = Array.from(
    { length: 8 },
    () => '<div class="card card--skeleton"></div>'
  ).join("");
  productsGrid.innerHTML = markup;
}

const load = async () => {
  try {
    createSkeleton();
    const data = await fetch("https://6ace3a4af338359cf1c34b0b.mockapi.io/products");
    const products = await data.json();
    const markup = products.map(createProductCard).join("")
    productsGrid.innerHTML = markup;
  } catch (error) {
    console.error('Failed to fetch!!!');
  }
}

load()
