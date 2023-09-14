import { postAdminNews } from "./api.js";
const inputName = document.querySelector('.admin-add-card__input-name');
const inputText = document.querySelector('.admin-add-card__input-text');
const btnFormArchiveNews = document.querySelector('.add-news__btn_type_archive');
const btnFormPostNews = document.querySelector('.add-news__btn_type_post')

function postAdminNewsArchive() {
    const inputFile = document.querySelector('.admin-add-card__input-file').files[0];
     postAdminNews(inputName, inputText, inputFile, false)
      .then(() => window.location.href = "admin-main.html");
}
function postAdminNewsPublish(){
    const inputFile = document.querySelector('.admin-add-card__input-file').files[0];
    postAdminNews(inputName, inputText, inputFile, true)
      .then(() => window.location.href = "admin-main.html");
}
btnFormArchiveNews.addEventListener('click', postAdminNewsArchive)
btnFormPostNews.addEventListener('click', postAdminNewsPublish)
