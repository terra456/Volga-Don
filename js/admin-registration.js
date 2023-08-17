const baseUrl = 'http://cv08121-django-53po4.tw1.ru';
const checkAnswer = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

   const getInfo = () => {
    return fetch(`${baseUrl}/articles/`)
    .then(response => response.json())
    .then(data => console.log(data));
    }
getInfo()
