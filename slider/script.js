let models = [
    {
        name: "Nissan Qashqai",
        image: "img/nissan.webp",
        link:
            "https://www.autoexpress.co.uk/nissan/qashqai"
    },
    {
        name: "Iphone 14 Pro Max",
        image: "img/iphone.jpg",
        link:
            "https://www.akakce.com/cep-telefonu/en-ucuz-iphone-14-pro-128-gb-mor-fiyati,2078290112.html"
    },
    {
        name: "Swarovski",
        image: "img/swarovski.jpg",
        link:
            "https://www.saatvesaat.com.tr/saat/bayan/swarovski/SWR5624379/PD/"
    }
];

var index = 0;

var slaytCount = models.length;

var interval;

var settings = {
    duration: "2000",
    random: false
};

init(settings);

document.querySelector(".fa-circle-arrow-left").addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector(".fa-circle-arrow-right").addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);

});

// for the slider to stop when mouse over the arrows
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});

// init function can continue to run when mouse leave the arrow
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
});

function init(settings) {

    var prev;
    interval=setInterval(function () {

        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev)
            prev = index;
        } else {
            if (slaytCount == index + 1) {
                index = -1;
            }
            showSlide(index);
            index++;
        }

        showSlide(index);

    }, settings.duration)

};


function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }


    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src", models[index].image);

    document.querySelector(".card-link").setAttribute("href", models[index].link);


};

