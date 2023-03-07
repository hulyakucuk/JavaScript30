let models=[
    {
        name: "Nissan Qashqai",
        image:"img/nissan.webp",
        link:
        "https://www.autoexpress.co.uk/nissan/qashqai"
    },
    {
        name: "Iphone 14 Pro Max",
        image:"img/iphone.jpg",
        link:
        "https://www.akakce.com/cep-telefonu/en-ucuz-iphone-14-pro-128-gb-mor-fiyati,2078290112.html"
    },
    {
        name: "Swarovski",
        image:"img/swarovski.jpg",
        link:
        "https://www.saatvesaat.com.tr/saat/bayan/swarovski/SWR5624379/PD/"
    }
];

var index=2;
document.querySelector(".card-title").textContent=models[index].name;

document.querySelector(".card-img-top").setAttribute("src",models[index].image);

document.querySelector(".card-link").setAttribute("href",models[index].link);