import { postAdminProduct } from "./api.js";
const inputName = document.querySelector(".admin-add-catalog__input-name");
const inputText = document.querySelector(".admin-add-catalog__input-text");
const btnFormArchiveCatalog = document.querySelector(
  ".add-catalog__btn_type_archive"
);
const btnFormPostCatalog = document.querySelector(".add-catalog__btn_type_post");

function postAdminProductArchive() {
    const inputFile = document.querySelector('.admin-add-catalog__input-file').files[0];
     postAdminProduct(inputName, inputText, inputFile, false)
      .then(() => window.location.href = "admin-main.html");
}
function postAdminProductPublish(){
    const inputFile = document.querySelector('.admin-add-catalog__input-file').files[0];
    postAdminProduct(inputName, inputText, inputFile, true)
      .then(() => window.location.href = "admin-main.html");
}
btnFormArchiveCatalog.addEventListener('click', postAdminProductArchive)
btnFormPostCatalog.addEventListener('click', postAdminProductPublish)
