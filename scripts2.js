async function fakeStoreAPI() {
    try {
        const [electronics, jewelery, random, recent] = await Promise.all([
          fetch('https://fakestoreapi.com/products/category/electronics?limit=2').then(res => res.json()),
          fetch('https://fakestoreapi.com/products/category/jewelery?limit=2').then(res => res.json()),
          fetch('https://fakestoreapi.com/products?limit=1').then(res => res.json()),
          fetch('https://fakestoreapi.com/products?limit=5').then(res => res.json()),
        ]);
    
        const data = {
          electronics: electronics,
          jewelery: jewelery,
          random: random,
          recent: recent,
        };
        return data; // return the data object
      } catch (error) {
        console.log(error); // log any errors
      }
}

fakeStoreAPI()
    .then((res) => {
        renderRecommend(res);
        renderRecently(res);
    })
    .catch((error) => {
        console.error(error.message);
    });

function renderRecently(data) {
  const productLists = document.querySelector('.product');
  const categoryRecently = ["recent"];
  console.log(data);

    data[categoryRecently].forEach(product => {
        productLists.innerHTML += `
        <div class="list-product">
            <div class="image-product">
                <img src="${product.image}" alt="product-1">
            </div>
                <div class="product-name">
                    <p class="title">${product.title}</p>
                    <div class="like">
                        <p>200</p>
                        <svg style="width: 20px; height: 20px; overflow: visible; opacity: 1; fill: rgb(232, 232, 232);" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                    </div>
                </div>
            <p class="price">&#36;${product.price}</p>
        </div>`;
    })
}

function renderRecommend(data) {
  const recommendProduct = document.querySelector('#recommend');
  const categoriesToShow = ["electronics", "jewelery", "random"];
  console.log(categoriesToShow);

  categoriesToShow.forEach(category => {
    data[category].forEach(product => {
      recommendProduct.innerHTML += `
        <div class="list-product">
          <div class="image-product">
            <img src="${product.image}" alt="product-1">
          </div>
          <div class="product-name">
            <p class="title">${product.title}</p>
            <div class="like">
              <p>200</p>
              <svg style="width: 20px; height: 20px; overflow: visible; opacity: 1; fill: rgb(232, 232, 232);" viewBox="0 0 512 512"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            </div>
          </div>
          <p class="price">&#36;${product.price}</p>
        </div>`;
    });
  });
}

// function renderProducts(data) {
//     
// }