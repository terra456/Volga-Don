const newsLink = document.querySelector('#news-link')
const newsBlock = document.querySelector('#news')

function scrollToNews() {
    if (newsBlock) {
      window.scrollTo({
        top: newsBlock.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  newsLink.addEventListener('click', function(event){
    event.preventDefault();
    scrollToNews()
  })
