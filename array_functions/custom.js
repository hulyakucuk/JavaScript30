const personel={
    kisisel:[
        {
            isim:"Hülya",
            soyisim:"Küçük",
            yas:21
        },
         {
            isim:"Ahmet",
            soyisim:"Arif",
            yas:33
        },
         {
            isim:"Sevval",
            soyisim:"Kalkavan",
            yas:29
        },
        {
            isim:"Ekin",
            soyisim:"Turhan",
            yas:19
        },
         {
            isim:"Ömer",
            soyisim:"Akif",
            yas:40
        },
         {
            isim:"Salih",
            soyisim:"Emir",
            yas:50
        },
        {
            isim:"Züleyha",
            soyisim:"Ahıskalı",
            yas:36
        },
         {
            isim:"Beyza",
            soyisim:"Cetiner",
            yas:26
        },
        {
            isim:"Ali",
            soyisim:"Ak",
            yas:46
        },
         {
            isim:"Veli",
            soyisim:"Kara",
            yas:23
        },
        {
            isim:"Ayşe",
            soyisim:"Kara",
            yas:35
        },
        {
            isim:"Kerim",
            soyisim:"Kara",
            yas:23
        },
        {
            isim:"Selim",
            soyisim:"Kara",
            yas:39
        },
    ],
    pozisyon:["FrontEnd Dev","Ogretmen","BackEnd Dev"]
};

// forEach ile
/* personel.kisisel.forEach(element=>{
    console.log(element.isim);
}); */

// for of ile
/* for(element of personel.kisisel){
    console.log(element);
} */

// map ve filter yeni bir dizi yaratır.

// map dizinin her bir elemanını belirtilen işleme tabi tutar

/* const map=personel.kisisel.map((veri,index)=>{
    return veri;
})
console.log(map); */

// filter

/* const filter=personel.kisisel.filter((veri,index)=>{
    return veri.isim==="Hülya";
})
console.log(filter); */

// map direkt veriyi getirir filter ise true false olma durumuna göre getirir
// filter true oldugunda verinin kendisini getirir map ise boolean tipini getirir.

// find() : bir array icerisindeki belirli kriterlere uyan ilk objeyi döndürür

/* const find=personel.kisisel.find(item=>(
    item.yas > 21
));

console.log(find); */

// findIndex(): Buldugu item in index numarasını döndürür.

/* const findIndex=personel.kisisel.findIndex((item)=>
{
    return item.yas==26
});
console.log(findIndex); */

// find belirtilen değeri bulamayınca "undefined" döne findIndex belirtilen değeri bulamayınca "-1" döner.

/* const sample=personel.kisisel.map((item)=>{
    return{
        Name:item.isim, Age:item.yas
    }
})
console.log(sample); */

/* const sample2=personel.kisisel.filter((item)=>{
    return item.yas >30 && item.soyisim=="Kara";
});
console.log(sample2);
 */

