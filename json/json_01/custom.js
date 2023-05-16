let list = document.getElementById("list");

let data = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // http isteginden json ı ayıkla
  .then((res) => {
    res.forEach((element) => {
      if (element.id < 10) {
        list.innerHTML += `<li>${element.title}</li>`;
      }
    });
  }); //veriyi tekrar al ve yazdır

let images = document.getElementById("images");

let img = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json()) // http isteginden json ı ayıkla
  .then((res) => {
    res.forEach((element) => {
      if (element.id < 15) {
        images.innerHTML += `<img src="${element.url}"/>`;
      }
    });
  });