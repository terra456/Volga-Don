import { getProductsCatalog } from "./api.js";
import { addCard, createCardCatalog } from "./admin-main.js";
import { cardProduct } from "./index.js";
const catalogPageContainer = document.querySelector('.catalog__container');

if (window.location.pathname.endsWith('catalog.html')){
getProductsCatalog()
.then(data => {
    data.forEach((product) => {
        addCard(product, catalogPageContainer, createCardCatalog, cardProduct)
      })
})
}