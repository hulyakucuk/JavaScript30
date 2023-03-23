
// 1-Template literals
// let name="hulya";
// let message=`merhaba ${name}`;
// let adsress="üsküdar/İstanbul";
// let all=`${name} ${message} ben ${adsress} da yaşıyorum`
// console.log(all);
// hulya merhaba hulya ben üsküdar/İstanbul da yaşıyorum
   
// 2-Shorthand property names

// let name="hulya";
// let age=21;

// // let user={
// //    name:name,
// //    age:age,
// // }; normalde bunu kullanırız ama bu uzun ve okunaksız

// // anahtarın değeri değişkenden geldiği için anahtarın 
// // açıkca belirtilmesine gerek yok

// let user={
//    name,
//    age
// };
// console.log(user);
   

// 3-Arrow Functions

// olusturulduktan sonra cagrılabilirler

// console.log(topla(2,3));
// yukarıda cağrıldıgında hata veir 
// aşagıda cagrılırsa sorun yok

// let topla=(num1,num2)=>{
//     return num1 +num2;
// };

// // okdan sonraki tek bir ifade 
// // ise su sekilde de kullanabiliriz

// // let topla=(num1,num2) => num1 +num2;


// console.log(carp(2,3));
// function carp(num1,num2){
//     return num1*num2;
// };

// 4- Object/Array Destructuring

let user={isim:"hulya",yas:21,adres:"üsküdar",burc:"aslan",meslek:"front-end developer"};

// burda yapılan işlem user objesindeki isim ve yas
// değerlerini isim ve yas adında 2 değişkene atamak
let {isim,yas}=user;

console.log(isim);
console.log(yas);

// mesleği meslek adında bir değişkene atadık ve user içindeki 
// meslek degerini ona verdik geri kalan butun obje elemanlarını da
// kalanlar adındaki bir objeye atmıs oluyoruz.

let{meslek,...kalanlar}=user;
console.log(meslek); //front-end developer
// console.log(kalanlar); // { isim: 'hulya', yas: 21, adres: 'üsküdar', burc: 'aslan' }

let sayilar=[1,2,3,4,5,6,7];

let [birinciEleman,...kalanlarr]=sayilar;

console.log(birinciEleman);
console.log(kalanlarr);


// 5-Parameter Defaults 

function increase(sayi1,sayi2=100){
    return sayi1 -sayi2;
}
console.log(increase(200));

// 6 -Rest/Spread Operator (toparlama/yayma operatörü)

// String ifadelerde kullanımı(spread)

let name="javascript";
let arrayOfStrings=[...name];
console.log(arrayOfStrings);
 
// Dizileri Birleştirme(spread)

let group1=[1,2,3];
let group2=[4,5,6];

let allGroups=[...group1,...group2];
console.log(allGroups);

// Fonksiyon çağrılarında Spread Operatör kullanımı

function sum(a,b,c){
    return a+b+c;
}
let nums=[1,2,4];

console.log(sum(...nums));

// Dizilerde Spread kullanımı



// 7-Ternary Operators (üç değişkenli koşul operatörleri) 

// null NaN 0 ve "" undefined bunlar kosul 
// ifadesine konulursa hep false dondurur

let sayi="";

sayi?console.log("sayı gecerli"):console.log("sayı gecersiz");

// diziler için sayı yeren yeze sayi.length 
// özelliğini kullan (kosulun dogru olmması için)

// objeler için Object.keys(sayi).length ozelliğini kullan



// 8-Dizilerde find() some() every() Kullanımı 

let urunler=[
    {
        id:1,
        name:"kalem",
        fiyat:5
    },
    {
        id:2,
        name:"defter",
        fiyat:8
    },
    {
        id:3,
        name:"silgi",
        fiyat:3
    },
    {
        id:4,
        name:"kalemtraş",
        fiyat:7
    },
];

console.log("find:",urunler.find((urun=>urun.fiyat>5)));
// find: { id: 2, name: 'defter', fiyat: 8 }


console.log("some:",urunler.some((urun=>urun.fiyat>9)));
// some: false

console.log("every:",urunler.every((urun=>urun.fiyat>4)));
// every: false


// 9-ESModules (ES Modülleri) 


// 10-Dizilerde .includes() ve .toLowerCase() Kullanımı

let ad="Ekin Turhan";

let isimm="MEHMET";
let kontrol="Mehmet";

console.log(ad.includes("han")); //true
console.log(ad.includes("ekin")); //False
console.log(ad.toLowerCase().includes("ekin")); //true
console.log(isimm.toLowerCase().includes(kontrol.toLowerCase())); //true


let lower=ad.toLowerCase();
console.log(lower);

// urunler dizisinden içinde kalem gecenleri dondur

console.log(urunler.filter((urun=>urun.name.toLowerCase().includes("kalem"))));


// 11-Dizilerde .map() Kullanımı 


let urunOlustur=(urun)=>`${urun.name} fiyatı ${urun.fiyat} tldir.`;

console.log(urunler.map(urunOlustur));


console.log(
    urunler.filter((urun)=>urun.fiyat>5)
    .map((urun) =>`${urun.name} fiyatı 5 ten büyüktür`)
);


let  toplamUrunFiyati= urunler.reduce((toplam,urun)=>urun.fiyat, 0)

console.log({toplamUrunFiyati});


// reduce() metodu 

let numbers=[1,2,3,5];
let suma=numbers.reduce((acc,item) => acc+item,0);
console.log(suma);

let veriGetir= new Promise((resolve,rejected) => {
    let veriGeldiMi=true;
    if(veriGeldiMi){
    resolve("veri burda");
    }
    else{
    rejected("veriyi alamadık");
 } });
    veriGetir.then((cevap)=>console.log("gelen cevap",cevap));
    
