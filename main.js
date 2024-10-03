async function init() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  render(result);
}

function render(result) {
  const itemsContainer = document.querySelector(".items-container");
  result.products.forEach((element) => {
    //creating and taking the title
    const title = document.createElement("h2");
    const titleContent = document.createTextNode(element.title);
    title.appendChild(titleContent);

    //creating and taking the description
    const description = document.createElement("span");
    const descriptionContent = document.createTextNode(element.description);
    description.appendChild(descriptionContent);

    //adding a product price
    const price = document.createElement("h3");
    const priceContent = document.createTextNode(element.price);
    price.appendChild(priceContent);

    //taking the image from the json
    const productImg = document.createElement("img");
    productImg.src = element.thumbnail;

    const itemCard = document.createElement("li");
    itemCard.append(productImg, title, description, price);

    itemsContainer.appendChild(itemCard);
  });
}

const btnTop = document.querySelector(".btn-top");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behaviour: "smoooth" });
});

const btnLoad = document.querySelector(".btn-load-more");
btnLoad.addEventListener("click", loadMore);

async function loadMore() {
  const itemNumber = document.querySelectorAll("li");
  const response = await fetch(
    // "https://dummyjson.com/products?limit=10&skip=10"
    `https://dummyjson.com/products?limit=10&skip=${itemNumber.length}`
  );
  const result = await response.json();
  render(result);
}
