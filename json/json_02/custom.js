/*
cors hatası:
url semasının http ya da https olmasından bahseder
*/

var data =fetch("data.json")
.then(response=>response.json()) //http cevabı geldiği için json a cevirdik
.then(data=>{
    console.log(data)
    var veri=JSON.stringify(data);
    console.log(veri);
});

// herhangi bir Javascript nesnesini alır ve onu 
// string formatına çevirir. Bunun için JSON.stringify(obj)

// JSON.parse(), dizeden(string) JSON verilerini ayrıştırmak için kullanılır.

let hastane={
    doktorlar:[
        {name:"Ekin",surname:"Akın",age:"22"},
        {name:"Yağmur",surname:"Sarı",age:"25"},
        {name:"Ali",surname:"Ak",age:"33"}
    ],
    poliklinik:"Kardiyoloji"
 
};

// for in objeler için kullanılır
// for of ve foreach ise genellikle array için kullanılır

let doktorlar=document.getElementsByClassName("doktorlar")[0];

for (let value in hastane){
    // console.log(hastane[value]); 

    var gelen=hastane[value];
    if(value=="doktorlar"){
        for(let isimler in gelen){
            doktorlar.innerHTML+=`<li>${gelen[isimler]["name"]} ${gelen[isimler]["surname"]}</li>`
        }
    }

}
// for in döngüsü key leri yazdırır value değerlerini yazdırmak istiyorsak
// hastane[value] seklinde indeks kullanmalıyız