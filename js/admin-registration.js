const baseUrl = 'https://cv08121-django-53po4.tw1.ru'
function getInfo(){
    try{
    return fetch(`${baseUrl}/articles`,{
    headers: {
        "Content-Type": "application/json",
      }})
      .then(res => res.json())
      .then(res => console.log(res))}
      catch(error){
        console.log(error)
      }
}
