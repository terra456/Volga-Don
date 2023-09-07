import {getAdminProducts } from "./api.js";
import { addCard, createCardCatalog } from "./admin-main.js";
import { exitAuth } from "./utils.js";
 const catalogContainer = document.querySelector('.admin-catalog__content');
getAdminProducts()
.then(data =>  {
    data.forEach((item) => {
   addCard(item, catalogContainer, createCardCatalog)
      })})
exitAuth()
